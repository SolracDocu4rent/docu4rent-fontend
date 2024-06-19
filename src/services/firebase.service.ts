import { DocumentData, Timestamp, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { auth, firestore, fbStorage, fbFunctions } from '@/firebase/firebase';


class FirebaseService {
  async getCurrentUser(): Promise<any> {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        const userDoc = await getDoc(doc(firestore, 'users', currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          return {
            ...userData
          };
        } else {
          throw new Error('No se encontraron datos para el usuario');
        }
      } catch (error) {
        console.error('Error al obtener datos de usuario:', error);
        throw new Error('Error al obtener datos de usuario');
      }
    } else {
      throw new Error('No hay usuario autenticado');
    }
  }

  async getUserToken(): Promise<string | undefined> {
    const currentUser = auth.currentUser;
    return await currentUser?.getIdToken();
  }

  async callCloudFunction(functionName: string, data?: any) {
    const functionCall = httpsCallable(fbFunctions, functionName);
    return functionCall();
  }

  async saveFirebaseDocument(collectionName: string, data: any) {
    try {
      data = { createdAt: Timestamp.now(), ...data }
      const docRef = doc(collection(firestore, collectionName));
      await setDoc(docRef, data);
      return docRef.id;
    } catch (error) {
      console.error('Error al obtener datos de usuario:', error);
      throw new Error('Error al obtener datos de usuario');
    }
  }

  async uploadFileToStorage(file: File, path: string): Promise<string> {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const storageRef = ref(fbStorage, currentUser.uid + path);

        // Iniciar la carga del archivo
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Obtener URL de descarga del archivo después de la carga
        return new Promise((resolve, reject) => {
          uploadTask.on('state_changed',
            (snapshot) => {
              // Manejar progreso de la carga (opcional)
              // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              // console.log('Progreso de carga: ' + progress + '%');
            },
            (error) => {
              // Manejar errores durante la carga
              console.error('Error al cargar el archivo:', error);
              reject(new Error('Error al cargar el archivo'));
            },
            async () => {
              // Carga completada con éxito
              console.log('Archivo cargado correctamente');

              // Obtener URL de descarga del archivo
              try {
                const downloadURL = await getDownloadURL(storageRef);
                resolve(downloadURL);
              } catch (error) {
                console.error('Error al obtener URL de descarga:', error);
                reject(new Error('Error al obtener URL de descarga'));
              }
            }
          );
        });
      } else {
        return ""
      }
    } catch (error) {
      console.error('Error al preparar la carga:', error);
      throw new Error('Error al preparar la carga del archivo');
    }
  }
}

const firebaseServiceInstance = new FirebaseService();
export default firebaseServiceInstance;
