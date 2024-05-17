let step1InputsArray: {
  key: string;
  input_id: number;
  input_type: number; //0== textfield, 1 == combobox, 2==upload ,  3 == double input(combobox + textfield)
  upper_text: string;
  options: string[]; //only combobox has options. Textfield will be an empty array
  input_value: string;
  input_label: string; //gray text insidde input
  first_input: any; //only for double inputs questions
  second_input: any; //only for double inputs questions
  is_company: boolean; //if true show for companies, if false dont show for companies
  is_person: boolean; //if true show for natural persons, if false dont show for natural persons
}[] = [
  {
    key: "0",
    input_id: 0,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
    upper_text:
      "Nombre de la corredora, empresa o persona que recibe tu información",
    options: [],
    input_value: "",
    input_label: "S&J Propiedades",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
  {
    key: "1",
    input_id: 1,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Correo al cual se envía el link de acceso",
    options: [],
    input_value: "",
    input_label: "documentos@propiedadessyj.com",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
  {
    key: "2",
    input_id: 2,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Plazo para acceder a la información",
    options: ["lugar1", "lugar2", "lugar3"],
    input_value: "",
    input_label: "Selecciona el plazo",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
  {
    key: "3",
    input_id: 3,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
    upper_text: "¿Necesitarás aval?",
    options: ["Si", "No"],
    input_value: "",
    input_label: "Si/No",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
  {
    key: "4",
    input_id: 4,
    input_type: 3, //0== textfield, 1 == combobox, 2==upload
    upper_text: "¿Eres aval de otra postulación?",
    options: [],
    input_value: "",
    input_label: "",
    first_input: {
      key: "104",
      input_id: 104,
      upper_text: "",
      options: ["Si", "No"],
      input_value: "",
      input_label: "Si/No",
    },
    second_input: {
      key: "105",
      input_id: 105,
      input_type: 1, //0== textfield, 1 == combobox, 2==upload
      upper_text: "",
      options: [],
      input_value: "",
      input_label: "Código de postulación",
    },
    is_company: true,
    is_person: true,
  },
  {
    key: "5",
    input_id: 5,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Postulas como",
    options: ["Empresa", "Persona Natural"],
    input_value: "",
    input_label: "Selecciona el plazo",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
];

export default step1InputsArray;
