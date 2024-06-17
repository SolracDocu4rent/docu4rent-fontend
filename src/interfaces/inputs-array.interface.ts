interface step1InputInterface {
  key: string;
  db_key: string;
  input_id: number;
  input_type: number; //0== textfield, 1 == combobox, 2==upload ,  3 == double input(combobox + textfield)
  upper_text: string;
  options: string[]; //only combobox has options. Textfield will be an empty array
  input_value: any;
  input_label: string; //gray text insidde input
  first_input: any; //only for double inputs questions
  second_input: any; //only for double inputs questions
  is_company: boolean; //if true show for companies, if false dont show for companies
  is_person: boolean; //if true show for natural persons, if false dont show for natural persons
  is_email: boolean;
}

interface step2InputInterface {
  key: string;
  db_key: string;
  input_id: number;
  input_type: number; //0== textfield, 1 == combobox, 2==upload ,  3 == double input(combobox + textfield), 7 == RUT
  upper_text: string;
  options: string[]; //only combobox has options. Textfield will be an empty array
  input_value: string;
  input_label: string; //gray text insidde input
  first_input: any; //only for double inputs questions
  second_input: any; //only for double inputs questions
  is_company: boolean; //if true show for companies, if false dont show for companies
  is_person: boolean; //if true show for natural persons, if false dont show for natural persons
}
