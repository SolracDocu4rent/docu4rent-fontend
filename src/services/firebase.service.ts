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
        const uploadTask = uploadBytesResumable(storageRef, file);
        return new Promise((resolve, reject) => {
          uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
              console.error('Error al cargar el archivo:', error);
              reject(new Error('Error al cargar el archivo'));
            },
            async () => {
              console.log('Archivo cargado correctamente');
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

  async getApplications(): Promise<any> {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        let userId = currentUser.uid
        const q = query(
          collection(firestore, 'applications'),
          where('userId', '==', userId)
        );
        const querySnapshot = await getDocs(q);
        const applications: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
          applications.push({ id: doc.id, data: doc.data() });
        });
        return applications;
      } else {
        return []
      }
    } catch (error) {
      console.error('Error al obtener solicitudes:', error);
      throw new Error('Error al obtener solicitudeso');
    }
  }

  async getApplicationData(applicationId: string) {
    try {
      const docRef = doc(firestore, 'applicationData', applicationId);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        return docSnapshot.data();
      } else {
        throw new Error(`No se encontró ninguna aplicación con el ID: ${applicationId}`);
      }
    } catch (error) {
      console.error('Error al obtener los datos de la aplicación:', error);
      throw new Error('Error al obtener los datos de la aplicación');
    }
  }
}

const firebaseServiceInstance = new FirebaseService();
export default firebaseServiceInstance;
