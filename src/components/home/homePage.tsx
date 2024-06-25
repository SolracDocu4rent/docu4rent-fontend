import { useEffect, useState } from "react";
import firebaseServiceInstance from "@/services/firebase.service";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { useRouter } from "next/navigation";

interface mock {
  key: number;
  name: string;
  status: string;
}
export default function HomePage() {
  const [email, setEmail] = useState("");
  const [arrayOfNotifications, setarrayOfNotifications] = useState<Array<mock>>(
    []
  );
  const router = useRouter();
  let mockdata = [
    { key: 1, name: "nombre1nombre1nombre1nombre1", status: "Rechazada" },
    { key: 2, name: "nombre2", status: "En proceso" },
    { key: 3, name: "nombre3", status: "Rechazada" },
    { key: 4, name: "nombre4", status: "Aclaración" },
    { key: 5, name: "nombre5", status: "Aprobada" },
    { key: 6, name: "nombre1nombre1nombre1nombre1", status: "Rechazada" },
    { key: 7, name: "nombre2", status: "En proceso" },
    { key: 8, name: "nombre3", status: "Rechazada" },
    { key: 9, name: "nombre4", status: "Aclaración" },
    //{ key: 10, name: "nombre5", status: "Aprobada" },
  ] as Array<mock>;

  useEffect(() => {
    //trae los datos cuando se entra a la pagina airlines
    let x: any = [];
    x.push({ key: 1, name: "nombre", status: "Rechazados" });
    //setarrayOfNotifications(mockdata); //comentar para ver los envios vacios. Descomentar para ver mock data


  }, []);
  
  const getApplicationsDetails = async (innerValueOfRow: any) => {
    await firebaseServiceInstance.getApplicationData(innerValueOfRow?.id).then((res) =>
      { //FALTA CORREO DE USUARIO,  REGION, NUMERO, BLOQUE, DATOS DE LA EMPRESA
        let detailedRow = innerValueOfRow;
        detailedRow.comuna = res[0]?.data?.commune;
        detailedRow.direccion = res[0]?.data?.street;
        return(detailedRow)
      }
    );
  };




  const getFullApplicationsData = async () => {
    await firebaseServiceInstance.getFullApplicationsData().then((res) =>{
      let y:any = [];
      let cont = 0;
      //maybe res should be ordered by date of creation DESC
      res.map(async (index:any) =>{
        cont++;
        if (cont < 15) {
          let x={
            id: index?.id, //Nro de lote
            status: "Rechazada", //status
            region: index?.region,
            comuna: index?.commune,
            direccion: index?.street
          };
          y.push(x);

          
        }
        
        
      });
      
      setarrayOfNotifications(y);
    }
    );
    
  };

  useEffect(() => {
    //trae los datos cuando se entra a la pagina 
    //getApplications();
    getFullApplicationsData();

    //getApplicationsDetails("xd");
  }, []);

  const arrayPrinterOfNotifications = () => {
    let y: any = [];
    let cont = 0;
    if (arrayOfNotifications.length === 0) {
      y[0] = (
        <div className="flex flex-row justify-center py-5 text-[20px] text-[lightgray] font-medium">
          Aquí aparecerán tus envíos en curso...
        </div>
      );
    } else {
      arrayOfNotifications.map((index: any) => {
        let bgOfStatus =
          index?.status === "En proceso"
            ? " bg-[#4086c3]"
            : index?.status === "Rechazada"
            ? " bg-[#CF2828]"
            : index?.status === "Aclaración"
            ? " bg-[#FFD700]"
            : index?.status === "Aprobada"
            ? " bg-[#01964E]"
            : " bg-[#BBBBBB]";
        cont++;
        y[cont] = (
          <div
            key={index?.key}
            className="flex flex-row justify-between items-center hover:bg-[#EBEBEB] rounded-lg"
          >
            <div className="flex flex-row items-center gap-3">
              <NotificationsNoneRoundedIcon htmlColor="#121212" />
              <p className="font-medium">{index?.direccion && index?.direccion } { " " + index?.comuna && index?.comuna } { " " + index?.region && index?.region}</p>
            </div>
            <div
              className={
                " text-white h-[28px] w-[150px] flex justify-center items-center rounded-full" +
                bgOfStatus
              }
            >
              <p>{index?.status}</p>
            </div>
          </div>
        );
      });
    }

    return y;
  };
  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center gap-5 pt-[140px] pb-[20px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
      <div className="pb-[20px] w-[100%] flex justify-center border-b-[2.5px] border-b-gray">
        <h2 className="text-[#A6A6A6] text-[14px]">¡Bienvenido!</h2>
      </div>
      <div className="min-w-[50%] pt-[30px]">
        <p className="text-[#609D9E] text-[16px] font-bold pb-[20px]">
          NOTIFICACIONES
        </p>
        <div className="border-[2.5px] border-gray rounded-lg p-3 bg-[#FFFFFF]">
          <div className="flex flex-row items-center justify-between pb-2">
            <p className="text-[#609D9E] text-[16px] font-bold pb-[10px]">
              Últimas postulaciones
            </p>
            <div className="flex flex-row items-center cursor-pointer ">
              <AddBoxOutlinedIcon htmlColor="#093BA0" />
              <p
                onClick={() => {
                  router.push("/MyPostulates");
                }}
                className="text-[#093BA0] font-semibold hover:font-bold text-[14px] "
              >
                Ver todos
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {arrayPrinterOfNotifications()}
          </div>
        </div>
      </div>
    </main>
  );
}
