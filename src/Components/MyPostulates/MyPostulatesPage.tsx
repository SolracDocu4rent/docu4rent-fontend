import RoundedButton from "@/components/Reusables/RoundedButton";
import { useState } from "react";

import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";

export default function MyPostulatesPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formsDataFormatted, setformsDataFormatted] = useState([
    {
      id: "123", //Nro de lote
      receiver: "",
      receivingEmail: "nodata", //regulacion
      endorsement: "", //nombre de producto
      shippingDate: "", //etapa
      validityDays: "", //finca
      status: "Rechazada", //status
      dateOfCreation: "", //Creado
      //document: "", //documento
    },
  ]);

  const [clickedFiltre, setclickedFiltre] = useState("Todas"); //for later use, working code
  const [arrayOfRows, setarrayOfRows] = useState(formsDataFormatted);

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
      minWidth: 100,
      maxWidth: 100,
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
    if (innerValueOfRow === "Aclaracion") {
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
    return (
      <div className="text-decoration-line: underline text-[#BBBBBB] cursor-pointer ">
        <p className="hover:font-semibold">Ver Informe</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen min-w-[100%] flex-col items-center gap-5 pt-[130px] font-['Montserrat', 'Poppins', 'Roboto', 'Helvetica', 'Arial']">
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
                  console.log("click");
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
