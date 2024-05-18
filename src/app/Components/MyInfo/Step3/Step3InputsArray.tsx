let step3InputsArray: {
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
    key: "30",
    input_id: 0,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Nombre",
    options: [],
    input_value: "",
    input_label: "Tu nombre",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
  {
    key: "31",
    input_id: 1,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Nombre Representante legal",
    options: [],
    input_value: "",
    input_label: "Nombre",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: false,
  },
  {
    key: "32",
    input_id: 2,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Apellido Paterno",
    options: [],
    input_value: "",
    input_label: "Tu apellido Paterno",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
  {
    key: "33",
    input_id: 3,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Apellido Paterno Representante legal",
    options: ["Si", "No"],
    input_value: "",
    input_label: "Apellido Paterno",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: false,
  },
  {
    key: "34",
    input_id: 4,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Apellido Materno",
    options: [],
    input_value: "",
    input_label: "Tu Apellido Materno",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
  {
    key: "35",
    input_id: 5,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Apellido Materno Representante legal",
    options: [],
    input_value: "",
    input_label: "Apellido Materno",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: false,
  },
  {
    key: "36",
    input_id: 5,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "RUT",
    options: [],
    input_value: "",
    input_label: "11.111.111-1",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
  {
    key: "37",
    input_id: 5,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "RUT Representante legal",
    options: [],
    input_value: "",
    input_label: "11.111.111-1",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: false,
  },
  {
    key: "38",
    input_id: 5,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Estado civil",
    options: [
      "Soltero/a",
      "Casado/a",
      "Viudo/a",
      "Divorciado/a",
      "Conviviente civil",
    ],
    input_value: "",
    input_label: "Tu estado civil",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
  {
    key: "39",
    input_id: 5,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "RUT Empresa",
    options: [],
    input_value: "",
    input_label: "11.111.111-1",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: false,
  },
  {
    key: "40",
    input_id: 5,
    input_type: 2, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Calle y número",
    options: [],
    input_value: "",
    input_label: "Av. El Monasterio 1234 ",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
];

export default step3InputsArray;
