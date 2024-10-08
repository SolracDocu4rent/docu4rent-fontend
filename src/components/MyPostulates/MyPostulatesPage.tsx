import RoundedButton from "@/components/reusables/RoundedButton";
import { useEffect, useState } from "react";
import { Dialog, TextField } from "@mui/material";
import firebaseServiceInstance from "@/services/firebase.service";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

export default function MyPostulatesPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const [postulatesData, setPostulatesData] = useState([]);
  const [postulatesDataDetail, setPostulatesDataDetail] = useState({});
  const [dialogData, setDialogData] = useState({
    id: "", //Nro de lote
    receiver: "",
    receivingEmail: "", //regulacion
    endorsement: "", //nombre de producto
    shippingDate: "", //etapa
    validityDays: "", //finca
    status: "", //status
    dateOfCreation: "", //Creado
    //document: "", //documento
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    RUT: "",
    nacionalidad: "",
    estadoCivil: "",
    profesion: "",
    TelefonoContacto: "",
    correoElectronico: "",
    region: "",
    comuna: "",
    direccion: "",
    numero: "",
    dpto: "",
    nombreEmpresa: "",
    RutEmpresa: 0,
    telefonoEmpresa: "",
    direccionEmpresa: "",
    antiguedadLaboral: "",
    tipoTrabajador: "",
    AFP: "",
    ultimoPago: "",
    sueldoBase: "",
    sueldoLiquido: "",
  });
  const [formsDataFormatted, setformsDataFormatted] = useState([
    //MOCKDATA
    // {
    //   id: "123", //Nro de lote
    //   receiver: "",
    //   receivingEmail: "nodata", //regulacion
    //   endorsement: "", //nombre de producto
    //   shippingDate: "", //etapa
    //   validityDays: "", //finca
    //   status: "Rechazada", //status
    //   dateOfCreation: "", //Creado
    //   //document: "", //documento
    //   nombre: "francisca paz",
    //   apellidoPaterno: "Neira",
    //   apellidoMaterno: "Ribes",
    //   RUT: "18.169.151-4",
    //   nacionalidad: "chilena",
    //   estadoCivil: "soltera",
    //   profesion: "Disenadora",
    //   TelefonoContacto: "+569123475679",
    //   correoElectronico: "fpneira@uc.cl",
    //   region: "Metropolitana de santiago",
    //   comuna: "Las Condes",
    //   direccion: "avenida las condes",
    //   numero: "7167",
    //   dpto: "116",
    //   nombreEmpresa: "Fallabella Financiero SpA",
    //   RutEmpresa: "73.123.456-7",
    //   telefonoEmpresa: "+562212345679",
    //   direccionEmpresa: "Rosario Norte 660 Las Condes",
    //   antiguedadLaboral: "1 año y 9 meses",
    //   tipoTrabajador: "Dependiente",
    //   AFP: "Modelo",
    //   ultimoPago: "29/03/2024",
    //   sueldoBase: "2600000",
    //   sueldoLiquido: "2100000",
    // },
    // {
    //   id: "456", //Nro de lote
    //   receiver: "",
    //   receivingEmail: "nodata", //regulacion
    //   endorsement: "", //nombre de producto
    //   shippingDate: "", //etapa
    //   validityDays: "", //finca
    //   status: "Rechazada", //status
    //   dateOfCreation: "", //Creado
    //   //document: "", //documento
    //   nombre: "Jose Alejandro",
    //   apellidoPaterno: "Romero",
    //   apellidoMaterno: "Melendez",
    //   RUT: "18.169.151-4",
    //   nacionalidad: "chilena",
    //   estadoCivil: "soltera",
    //   profesion: "Disenadora",
    //   TelefonoContacto: "+569123475679",
    //   correoElectronico: "fpneira@uc.cl",
    //   region: "Metropolitana de santiago",
    //   comuna: "Las Condes",
    //   direccion: "avenida las condes",
    //   numero: "7167",
    //   dpto: "116",
    //   nombreEmpresa: "Fallabella Financiero SpA",
    //   RutEmpresa: "73.123.456-7",
    //   telefonoEmpresa: "+562212345679",
    //   direccionEmpresa: "Rosario Norte 660 Las Condes",
    //   antiguedadLaboral: "1 año y 9 meses",
    //   tipoTrabajador: "Dependiente",
    //   AFP: "Modelo",
    //   ultimoPago: "29/03/2024",
    //   sueldoBase: "2600000",
    //   sueldoLiquido: "2100000",
    // },
  ]);

  const [clickedFiltre, setclickedFiltre] = useState("Todas"); //for later use, working code
  const [arrayOfRows, setarrayOfRows] = useState(formsDataFormatted);

  const getStatus = (data: any) => {
    if (data === "pending") {
      return "Pendiente";
    } else if (data === "in progress") {
      return "En Proceso";
    }
    return "";
  };

  const getApplications = async () => {
    await firebaseServiceInstance.getApplications().then((res) => {
      setPostulatesData(res);
      let y: any = [];
      res.map((index: any) => {
        let x = {
          type: index?.data?.type, //"Persona Natural" o "Empresa"
          id: index?.id, //Nro de lote
          receiver: index?.data?.broker,
          receivingEmail: index?.data?.brokerEmail, //regulacion
          endorsement: index?.data?.needCosigner ? "Si" : "No", //nombre de producto
          shippingDate: "", //etapa
          validityDays: index?.data?.linkTime, //finca
          status: getStatus(index?.data?.status), //status
          dateOfCreation: "", //Creado
          //document: "", //documento
          nombre: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          RUT: "",
          nacionalidad: "",
          estadoCivil: "",
          profesion: "",
          TelefonoContacto: "",
          correoElectronico: "",
          region: "",
          comuna: "",
          direccion: "",
          numero: "",
          dpto: "",
          nombreEmpresa: "",
          RutEmpresa: index?.data?.brokerRut,
          telefonoEmpresa: index?.data?.brokerPhone,
          direccionEmpresa: index?.data?.brokerAddress,
          antiguedadLaboral: index?.data?.contractLength,
          tipoTrabajador: "",
          AFP: index?.data?.afp,
          ultimoPago: index?.data?.lastPayment,
          sueldoBase: index?.data?.baseSalary,
          sueldoLiquido: index?.data?.liquidSalary,
          verInforme: index?.data?.status !== "in progress" ? false : true,
        };
        y.push(x);
      });
      setarrayOfRows(y);
    });
  };

  const getApplicationsDetails = async (innerValueOfRow: any) => {
    await firebaseServiceInstance
      .getApplicationData(innerValueOfRow?.id)
      .then((res) => {
        //FALTA CORREO DE USUARIO,  REGION, NUMERO, BLOQUE, DATOS DE LA EMPRESA
        let detailedRow = innerValueOfRow;
        detailedRow.estadoCivil = res[0]?.data?.civilStatus;
        detailedRow.comuna = res[0]?.data?.commune;

        if (detailedRow.type === "Empresa") {
          detailedRow.nombre = res[0]?.data?.company?.legalRepresentativeName;
          detailedRow.apellidoMaterno =
            res[0]?.data?.company?.legalRepresentativeMotherLastName;
          detailedRow.apellidoPaterno =
            res[0]?.data?.company?.legalRepresentativeFatherLastName;
          detailedRow.RUT = res[0]?.data?.company?.legalRepresentativeRut;
        } else {
          detailedRow.nombre = res[0]?.data?.name;
          detailedRow.apellidoPaterno = res[0]?.data?.fatherLastName;
          detailedRow.apellidoMaterno = res[0]?.data?.motherLastName;
          detailedRow.apellidoMaterno = res[0]?.data?.motherLastName;
          detailedRow.RUT = res[0]?.data?.rut;
        }

        detailedRow.nacionalidad = res[0]?.data?.nationality;
        detailedRow.TelefonoContacto = res[0]?.data?.phone;
        detailedRow.profesion = res[0]?.data?.profession;
        //detailedRow.RutEmpresa = res[0]?.data?.brokerRut;
        detailedRow.direccion = res[0]?.data?.street;
        detailedRow.tipoTrabajador = res[0]?.data?.workerType;
        //detailedRow.antiguedadLaboral = res[0]?.data?.contractLength;
        setDialogData(detailedRow);
      });
  };

  const getFullApplicationsData = async () => {
    await firebaseServiceInstance.getFullApplicationsData().then((res) => {});
  };

  useEffect(() => {
    //trae los datos cuando se entra a la pagina
    getApplications();
    //getFullApplicationsData();
    //getApplicationsDetails("xd");
  }, []);

  // useEffect(() => {
  //   fetch(
  //     `https://backend-iawdfmhnsa-uc.a.run.app/form-applications/company/${companyId}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setformsData(data))
  //     .catch((error) => {
  //       console.error("Error fetching farms:", error);
  //     });
  // }, [companyId, token]);

  const setformsData = (data: any) => {
    let result: any = [];
    // eslint-disable-next-line array-callback-return
    data.map((index: any) => {
      result.push({
        id: index?.id, //ID unico del doc
        receiver: index["1_1320a"], //nro de lote
        receivingEmail: "Estados Unidos Regla 204", //regulacion
        endorsement: index?.companyProduct?.regulatedProduct?.name, //nombre de producto
        shippingDate: index?.rol1, //etapa
        validityDays: index["1_1315a5"], //finca
        status:
          index?.companyProduct?.status === "FINISHED" ? "Finalizada" : "", //status
        dateOfCreation: index?.createdAt?.slice(0, 10), //Creado
        Application: "Formulario",
        //document: "Descargar", //documento
      });
    });
    setformsDataFormatted(result);
    setarrayOfRows(result);
  };

  const columns2: GridColDef[] = [
    {
      field: "id",
      headerName: "# Postulación",
      editable: false,
      flex: 1,
      renderCell: RenderID,
      headerClassName: "theme--header",
    },
    {
      field: "receiver",
      headerName: "Recepcionista",
      flex: 1,
      editable: false,
      headerClassName: "theme--header",
    },
    {
      field: "receivingEmail",
      headerName: "Correo que recepciona",
      minWidth: 210,
      flex: 1,
      //: largeScreen ? 220 : MediumScreen ? 200 : smallScreen ? 180 : 180,
      editable: false,
      headerClassName: "theme--header",
    },
    {
      field: "endorsement",
      headerName: "Aval",
      flex: 1,
      minWidth: 120,
      editable: false,
      headerClassName: "theme--header",
    },
    {
      field: "shippingDate",
      headerName: "Fecha envío",
      minWidth: 230,
      editable: false,
      headerClassName: "theme--header",
    },
    {
      field: "validityDays",
      headerName: "Dias de vigencia",
      flex: 1,
      minWidth: 100,
      editable: false,
      headerClassName: "theme--header",
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 1,
      editable: false,
      renderCell: RenderStatus,
      headerClassName: "theme--header",
    },
    {
      field: "Application",
      headerName: "Documento",
      editable: false,
      headerClassName: "theme--header",
      minWidth: 160,
      maxWidth: 200,
      renderCell: RenderApplication,
    },
    /*{ //commenting download column for later use
      field: "document",
      headerName: "Documento",
      width: 110,
      flex: 1,
      editable: false,
      type: "c",
      headerClassName: "theme--header",
      renderCell: RenderDocument,
    },*/
  ];

  function RenderID(props: GridRenderCellParams<any>) {
    const innerValueOfRow = props?.row?.id;

    return (
      <p className="font-bold" /*className={styles.lotIdText}*/>
        # {innerValueOfRow}
      </p>
    );
  }

  function RenderStatus(props: GridRenderCellParams<any>) {
    const innerValueOfRow = props?.row?.status;
    if (innerValueOfRow === "En Proceso") {
      return (
        <div className="h-[100%] w-[100%] flex items-center ">
          <div className="bg-[#4086c3] text-white h-[28px] w-[150px] flex justify-center items-center rounded-full">
            <p>{innerValueOfRow}</p>
          </div>
        </div>
      );
    }
    if (innerValueOfRow === "Pendiente") {
      return (
        <div className="h-[100%] w-[100%] flex items-center ">
          <div className="bg-[#FFD700] text-white h-[28px] w-[150px] flex justify-center items-center rounded-full">
            <p>{innerValueOfRow}</p>
          </div>
        </div>
      );
    }
    if (innerValueOfRow === "Aprobada") {
      return (
        <div className="h-[100%] w-[100%] flex items-center ">
          <div className="bg-[#01964E] text-white h-[28px] w-[150px] flex justify-center items-center rounded-full">
            <p>{innerValueOfRow}</p>
          </div>
        </div>
      );
    }
    if (innerValueOfRow === "Rechazada") {
      return (
        <div className="h-[100%] w-[100%] flex items-center ">
          <div className="bg-[#CF2828] text-white h-[28px] w-[150px] flex justify-center items-center rounded-full">
            <p>{innerValueOfRow}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="h-[100%] w-[100%] flex items-center ">
        <div className="bg-[#BBBBBB] text-white h-[28px] w-[150px] flex justify-center items-center rounded-full">
          <p>No Encontrado</p>
        </div>
      </div>
    );
  }

  function RenderApplication(props: GridRenderCellParams<any>) {
    const innerValueOfRow = props?.row;

    return (
      <div className="text-decoration-line: underline text-[#BBBBBB] cursor-pointer ">
        <p
          onClick={() => {
            if (innerValueOfRow?.verInforme) {
              getApplicationsDetails(innerValueOfRow);
              //setDialogData(innerValueOfRow);
              setOpenDetailDialog(true);
            }
          }}
          className="hover:font-semibold"
        >
          {innerValueOfRow?.verInforme
            ? "Ver Informe"
            : "Informe No disponible"}
        </p>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center gap-5 pt-[130px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
      <Dialog
        open={openDetailDialog}
        onClose={() => setOpenDetailDialog(false)}
        className=""
        fullScreen={true}
      >
        <div
          className="cursor-pointer flex flex-row absolute top-10 left-10"
          onClick={() => setOpenDetailDialog(false)}
        >
          <KeyboardArrowLeftRoundedIcon htmlColor="#466197" />
          <p className="text-[#466197] font-medium hover:font-bold">Regresar</p>
        </div>

        <div className="px-[10%] py-[85px] ">
          <div className="flex flex-row justify-between">
            <p className="text-[#466197] font-bold text-[28px]">
              Resumen de Postulación
            </p>
            <p className="text-[28px] font-[600] text-[#7AC3C4] font-['Kartika','Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
              docu4rent
            </p>
          </div>
          <div className="bg-[url(images/Backgrounds/ArrayOf4sBackground.png)] bg-opacity-25 mt-3 py-3 pl-3">
            <p className="text-[#466197] font-bold text-[20px]">Indicadores</p>
            <div className="flex flex-row justify-around py-5 ">
              <div className="max-w-[25%] border-[2px] border-[#BBBBB] shadow-md py-5 px-3 rounded-2xl flex flex-col gap-3 bg-[#FFFFFF]">
                <p className="text-[18px] font-medium ">
                  Score crediticio:{" "}
                  <span className="text-[18px] text-[#466197] font-bold">
                    {" " + 88}
                  </span>
                </p>
                <p className="text-[12px] text-[#466197]">
                  Puntaje que se le asigna a una persona para determinar si es
                  un buen pagador, en caso de adquirir un compromiso financiero
                  o deuda. Va de 0 a 99 y dado par Equifax.
                </p>
              </div>
              <div className="max-w-[25%] border-[2px] border-[#BBBBB] shadow-md py-5 px-3 rounded-2xl flex flex-col gap-3 bg-[#FFFFFF]">
                <p className="text-[18px] font-medium ">
                  Valor seguro:{" "}
                  <span className="text-[18px] text-[#466197] font-bold">
                    ${700000}
                  </span>
                </p>
                <p className="text-[12px] text-[#466197]">
                  Se recomienda que el valor total de pago de un arriendo o
                  dividendo sea un tercio del sueldo líquido del comprador o
                  arrendatario. Esta información es util al momento de postular
                  a una vivienda.
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#466197] font-bold text-[20px] pl-3 pt-5">
            Ficha personal
          </p>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[45%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Nombres</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.nombre}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Apellido Paterno</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.apellidoPaterno}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Apellido Materno</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.apellidoMaterno}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[20%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">RUT</p>
              <p className="text-[#121212] text-[18px] ">{dialogData?.RUT}</p>
            </div>
            <div className=" w-[20%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Nacionalidad</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.nacionalidad}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Estado Civil</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.estadoCivil}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Profesion</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.profesion}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[45%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Teléfono de contacto</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.TelefonoContacto}
              </p>
            </div>
            <div className=" w-[50%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Coreo electrónico</p>
              <p className="text-[#121212] text-[18px] ">
                {auth?.currentUser?.email}
              </p>
            </div>
          </div>
          <p className="text-[#466197] font-bold text-[20px] pl-3 pt-5">
            Domicilio
          </p>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[45%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Región</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.region}
              </p>
            </div>
            <div className=" w-[50%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Comuna</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.comuna}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[45%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Dirección</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.direccion}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Número</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.numero}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Dpto-Block-Torre</p>
              <p className="text-[#121212] text-[18px] ">{dialogData?.dpto}</p>
            </div>
          </div>
          <p className="text-[#466197] font-bold text-[20px] pl-3 pt-5">
            Ficha Laboral
          </p>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[45%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Nombre Empresa</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.receiver}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">RUT Empresa</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.RutEmpresa}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Teléfono</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.telefonoEmpresa}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[45%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Dirección</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.direccionEmpresa}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Antiguedad Laboral</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.antiguedadLaboral}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Tipo Trabajador</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.tipoTrabajador}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[5%] p-5">
            <div className=" w-[20%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">AFP</p>
              <p className="text-[#121212] text-[18px] ">{dialogData?.AFP}</p>
            </div>
            <div className=" w-[20%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Último pago</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.ultimoPago}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Sueldo base</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.sueldoBase}
              </p>
            </div>
            <div className=" w-[22.5%] border-b-[2.5px] border-b-gray">
              <p className="text-[12px] text-[#466197]">Sueldo líquido</p>
              <p className="text-[#121212] text-[18px] ">
                {dialogData?.sueldoLiquido}
              </p>
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer flex justify-end px-5 pb-5 w-[100%]"
          onClick={() => {
            console.log("click link");
          }}
        >
          <p className="text-[#466197] font-medium hover:font-bold ">
            link de validacion: www.docu4rent/1233456
          </p>
        </div>
      </Dialog>
      <div className="w-[95%]">
        <div className="w-[100%]">
          <h2 className="text-[28px] font-bold text-[#121212] ">
            Mis postulaciones
          </h2>
          <div className="flex flex-row justify-between">
            <p className="text-[14px] font-medium text-[#A6A6A6]">
              Revisa el status de tus postulaciones
            </p>
            <div className="pb-[20px]">
              <RoundedButton
                executableFunction={() => {
                  router.push("/personal-information");
                }}
                buttonText="Enviar Documento"
                rounded={true}
                primaryBackgroundColor={true}
                whiteTextColor={true}
                standardSize={false}
              />
            </div>
          </div>
          <DataGrid
            rows={arrayOfRows}
            columns={columns2}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            sx={{
              "& .theme--header": {
                backgroundColor: "#558D8D",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
