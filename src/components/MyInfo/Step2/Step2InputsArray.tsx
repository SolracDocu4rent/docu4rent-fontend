let step2InputsArray: {
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
    key: "10",
    input_id: 0,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "11",
    input_id: 1,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "12",
    input_id: 2,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "13",
    input_id: 3,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "14",
    input_id: 4,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "15",
    input_id: 5,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "16",
    input_id: 6,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "17",
    input_id: 7,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "18",
    input_id: 8,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
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
    key: "19",
    input_id: 9,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
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
    key: "20",
    input_id: 10,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Calle y número",
    options: [],
    input_value: "",
    input_label: "Av. El Monasterio 1234 ",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
  {
    key: "21",
    input_id: 11,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Comuna",
    options: [
      "Aisén",
      "Algarrobo",
      "Alhué",
      "Alto Biobío",
      "Alto del Carmen",
      "Alto Hospicio",
      "Ancud",
      "Andacollo",
      "Angol",
      "Antártica",
      "Antofagasta",
      "Antuco",
      "Arauco",
      "Arica",
      "Buin",
      "Bulnes",
      "Cabildo",
      "Cabo de Hornos (Ex Navarino)",
      "Calama",
      "Calbuco",
      "Caldera",
      "Calera",
      "Calera de Tango",
      "Calle Larga",
      "Camarones",
      "Camiña",
      "Canela",
      "Cañete",
      "Carahue",
      "Cartagena",
      "Casablanca",
      "Castro",
      "Catemu",
      "Cauquenes",
      "Cerrillos",
      "Cerro Navia",
      "Chaitén",
      "Chanco",
      "Chañaral",
      "Chépica",
      "Chiguayante",
      "Chile Chico",
      "Chillán",
      "Chillán Viejo",
      "Chimbarongo",
      "Cholchol",
      "Cochamó",
      "Codegua",
      "Coelemu",
      "Coihaique",
      "Coihueco",
      "Colbún",
      "Colchane",
      "Colina",
      "Coltauco",
      "Combarbalá",
      "Concepción",
      "Concón",
      "Conchalí",
      "Constitución",
      "Contulmo",
      "Copiapó",
      "Coronel",
      "Corral",
      "Cochrane",
      "Cisnes",
      "Cunco",
      "Curanilahue",
      "Curacautín",
      "Curacaví",
      "Curaco de Vélez",
      "Curarrehue",
      "Curepto",
      "Curicó",
      "Dalcahue",
      "Diego de Almagro",
      "Doñihue",
      "El Bosque",
      "El Carmen",
      "El Monte",
      "El Quisco",
      "El Tabo",
      "Empedrado",
      "Ercilla",
      "Estación Central",
      "Florida",
      "Freire",
      "Freirina",
      "Fresia",
      "Frutillar",
      "Futrono",
      "Galvarino",
      "General Lagos",
      "Gorbea",
      "Graneros",
      "Guaitecas",
      "Hijuelas",
      "Hualaihué",
      "Hualañé",
      "Hualpén",
      "Hualqui",
      "Huara",
      "Huechuraba",
      "Huasco",
      "Illapel",
      "Independencia",
      "Iquique",
      "Isla de Maipo",
      "Isla de Pascua",
      "Juan Fernández",
      "La Cisterna",
      "La Estrella",
      "La Florida",
      "La Granja",
      "La Higuera",
      "La Ligua",
      "La Pintana",
      "La Reina",
      "La Serena",
      "Lago Ranco",
      "Lago Verde",
      "Laja",
      "Lampa",
      "Lanco",
      "Las Cabras",
      "Las Condes",
      "Lautaro",
      "Lebu",
      "Licantén",
      "Limache",
      "Linares",
      "Litueche",
      "Llanquihue",
      "Llaillay",
      "Lolol",
      "Loncoche",
      "Longaví",
      "Lonquimay",
      "Los Álamos",
      "Los Andes",
      "Los Ángeles",
      "Los Lagos",
      "Los Muermos",
      "Los Sauces",
      "Los Vilos",
      "Lumaco",
      "Macul",
      "Machalí",
      "Maipú",
      "Malloa",
      "Mariquina",
      "María Elena",
      "María Pinto",
      "Marchihue",
      "Máfil",
      "Maullín",
      "Mejillones",
      "Melipeuco",
      "Melipilla",
      "Monte Patria",
      "Mostazal",
      "Mulchén",
      "Nacimiento",
      "Nancagua",
      "Natales",
      "Navidad",
      "Negrete",
      "Ninhue",
      "Nogales",
      "Nueva Imperial",
      "Ñiquén",
      "Ñuñoa",
      "O’Higgins",
      "Ollagüe",
      "Olmué",
      "Olivar",
      "Ovalle",
      "Padre las Casas",
      "Padre Hurtado",
      "Paiguano",
      "Paillaco",
      "Paine",
      "Palmilla",
      "Panquehue",
      "Panguipulli",
      "Papudo",
      "Paredones",
      "Pedro Aguirre Cerda",
      "Pelarco",
      "Pelluhue",
      "Pemuco",
      "Peñaflor",
      "Peñalolén",
      "Pencahue",
      "Penco",
      "Peralillo",
      "Perquenco",
      "Petorca",
      "Peumo",
      "Pica",
      "Pichidegua",
      "Pichilemu",
      "Pinto",
      "Pirque",
      "Placilla",
      "Porvenir",
      "Portezuelo",
      "Pozo Almonte",
      "Primavera",
      "Providencia",
      "Puchuncaví",
      "Pucón",
      "Pudahuel",
      "Puente Alto",
      "Puente Alto",
      "Puerto Montt",
      "Puerto Octay",
      "Puerto Varas",
      "Pumanque",
      "Punta Arenas",
      "Puno",
      "Pupuya",
      "Purranque",
      "Puyehue",
      "Putre",
      "Putaendo",
      "Puqueldón",
      "Quellón",
      "Quemchi",
      "Queilén",
      "Quilaco",
      "Quilicura",
      "Quilleco",
      "Quillota",
      "Quillón",
      "Quilpué",
      "Quinchao",
      "Quinta de Tilcoco",
      "Quinta Normal",
      "Quintero",
      "Quirihue",
      "Rancagua",
      "Ránquil",
      "Rauco",
      "Recoleta",
      "Renaico",
      "Renca",
      "Rengo",
      "Requínoa",
      "Retiro",
      "Río Bueno",
      "Río Claro",
      "Río Hurtado",
      "Río Ibáñez",
      "Río Negro",
      "Río Verde",
      "Romeral",
      "Saavedra",
      "Sagrada Familia",
      "Salamanca",
      "San Antonio",
      "San Bernardo",
      "San Carlos",
      "San Clemente",
      "San Esteban",
      "San Fabián",
      "San Felipe",
      "San Fernando",
      "San Gregorio",
      "San Ignacio",
      "San Javier",
      "San Joaquín",
      "San José de Maipo",
      "San Juan de la Costa",
      "San Miguel",
      "San Nicolás",
      "San Pablo",
      "San Pedro",
      "San Pedro de Atacama",
      "San Pedro de la Paz",
      "San Pedro de Maipo",
      "San Rafael",
      "San Ramón",
      "San Rosendo",
      "San Vicente",
      "Santa Bárbara",
      "Santa Cruz",
      "Santa Juana",
      "Santa María",
      "Santiago",
      "Santo Domingo",
      "Sierra Gorda",
      "Talagante",
      "Talcahuano",
      "Taltal",
      "Talca",
      "Temuco",
      "Teno",
      "Teodoro Schmidt",
      "Tierra Amarilla",
      "Tiltil",
      "Timaukel",
      "Tirúa",
      "Tocopilla",
      "Toltén",
      "Tomé",
      "Torres del Paine",
      "Traiguén",
      "Treguaco",
      "Tucapel",
      "Valdivia",
      "Vallenar",
      "Valparaíso",
      "Victoria",
      "Vichuquén",
      "Vilcún",
      "Villa Alegre",
      "Villa Alemana",
      "Villarrica",
      "Viña del Mar",
      "Vitacura",
      "Yerbas Buenas",
      "Yumbel",
      "Yungay",
      "Zapallar",
      "Ñuñoa",
    ],
    input_value: "",
    input_label: "Las condes",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
  {
    key: "22",
    input_id: 12,
    input_type: 0, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Celular",
    options: [],
    input_value: "",
    input_label: "+56 9 1234 5678",
    first_input: {},
    second_input: {},
    is_company: true,
    is_person: true,
  },
  {
    key: "23",
    input_id: 13,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Nacionalidad",
    options: [
      "Chile",
      "Afganistán",
      "Albania",
      "Alemania",
      "Andorra",
      "Angola",
      "Anguila",
      "Antártida",
      "Antigua y Barbuda",
      "Arabia Saudita",
      "Argelia",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaiyán",
      "Bélgica",
      "Bahamas",
      "Bahrein",
      "Bangladesh",
      "Barbados",
      "Belice",
      "Benín",
      "Bhután",
      "Bielorrusia",
      "Birmania",
      "Bolivia",
      "Bosnia y Herzegovina",
      "Botsuana",
      "Brasil",
      "Brunéi",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Camboya",
      "Camerún",
      "Canadá",
      "Chad",
      "China",
      "Chipre",
      "Ciudad del Vaticano",
      "Colombia",
      "Comoras",
      "República del Congo",
      "República Democrática del Congo",
      "Corea del Norte",
      "Corea del Sur",
      "Costa de Marfil",
      "Costa Rica",
      "Croacia",
      "Cuba",
      "Curazao",
      "Dinamarca",
      "Dominica",
      "Ecuador",
      "Egipto",
      "El Salvador",
      "Emiratos Árabes Unidos",
      "Eritrea",
      "Eslovaquia",
      "Eslovenia",
      "España",
      "Estados Unidos de América",
      "Estonia",
      "Etiopía",
      "Filipinas",
      "Finlandia",
      "Fiyi",
      "Francia",
      "Gabón",
      "Gambia",
      "Georgia",
      "Ghana",
      "Gibraltar",
      "Granada",
      "Grecia",
      "Groenlandia",
      "Guadalupe",
      "Guam",
      "Guatemala",
      "Guayana Francesa",
      "Guernsey",
      "Guinea",
      "Guinea Ecuatorial",
      "Guinea-Bissau",
      "Guyana",
      "Haití",
      "Honduras",
      "Hong kong",
      "Hungría",
      "India",
      "Indonesia",
      "Irán",
      "Irak",
      "Irlanda",
      "Isla Bouvet",
      "Isla de Man",
      "Isla de Navidad",
      "Isla Norfolk",
      "Islandia",
      "Islas Bermudas",
      "Islas Caimán",
      "Islas Cocos (Keeling)",
      "Islas Cook",
      "Islas de Åland",
      "Islas Feroe",
      "Islas Georgias del Sur y Sandwich del Sur",
      "Islas Heard y McDonald",
      "Islas Maldivas",
      "Islas Malvinas",
      "Islas Marianas del Norte",
      "Islas Marshall",
      "Islas Pitcairn",
      "Islas Salomón",
      "Islas Turcas y Caicos",
      "Islas Ultramarinas Menores de Estados Unidos",
      "Islas Vírgenes Británicas",
      "Islas Vírgenes de los Estados Unidos",
      "Israel",
      "Italia",
      "Jamaica",
      "Japón",
      "Jersey",
      "Jordania",
      "Kazajistán",
      "Kenia",
      "Kirguistán",
      "Kiribati",
      "Kuwait",
      "Líbano",
      "Laos",
      "Lesoto",
      "Letonia",
      "Liberia",
      "Libia",
      "Liechtenstein",
      "Lituania",
      "Luxemburgo",
      "México",
      "Mónaco",
      "Macao",
      "Macedônia",
      "Madagascar",
      "Malasia",
      "Malawi",
      "Mali",
      "Malta",
      "Marruecos",
      "Martinica",
      "Mauricio",
      "Mauritania",
      "Mayotte",
      "Micronesia",
      "Moldavia",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Mozambique",
      "Namibia",
      "Nauru",
      "Nepal",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Noruega",
      "Nueva Caledonia",
      "Nueva Zelanda",
      "Omán",
      "Países Bajos",
      "Pakistán",
      "Palau",
      "Palestina",
      "Panamá",
      "Papúa Nueva Guinea",
      "Paraguay",
      "Perú",
      "Polinesia Francesa",
      "Polonia",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reino Unido",
      "República Centroafricana",
      "República Checa",
      "República Dominicana",
      "República de Sudán del Sur",
      "Reunión",
      "Ruanda",
      "Rumanía",
      "Rusia",
      "Sahara Occidental",
      "Samoa",
      "Samoa Americana",
      "San Bartolomé",
      "San Cristóbal y Nieves",
      "San Marino",
      "San Martín (Francia)",
      "San Pedro y Miquelón",
      "San Vicente y las Granadinas",
      "Santa Elena",
      "Santa Lucía",
      "Santo Tomé y Príncipe",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leona",
      "Singapur",
      "Sint Maarten",
      "Siria",
      "Somalia",
      "Sri lanka",
      "Sudáfrica",
      "Sudán",
      "Suecia",
      "Suiza",
      "Surinám",
      "Svalbard y Jan Mayen",
      "Swazilandia",
      "Tayikistán",
      "Tailandia",
      "Taiwán",
      "Tanzania",
      "Territorio Británico del Océano Índico",
      "Territorios Australes y Antárticas Franceses",
      "Timor Oriental",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad y Tobago",
      "Tunez",
      "Turkmenistán",
      "Turquía",
      "Tuvalu",
      "Ucrania",
      "Uganda",
      "Uruguay",
      "Uzbekistán",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Wallis y Futuna",
      "Yemen",
      "Yibuti",
      "Zambia",
      "Zimbabue",
    ],
    input_value: "",
    input_label: "Chileno",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
  {
    key: "24",
    input_id: 14,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Profesion",
    options: [
      "Ingeniería en Administración de Recursos Humanos y similares",
      "Técnico en Administración de Recursos Humanos",
      "Agronomía",
      "Ingeniería Agrícola y Agropecuaría",
      "Ingeniería Agroindustrial",
      "Ingeniería Agronómica",
      "Ingeniería Civil Agroindustrial y similares",
      "Ingeniería Civil en Industrias de la Madera",
      "Ingeniería en Acuicultura y similares",
      "Ingeniería en Alimentos y similares",
      "Ingeniería Forestal y similares",
      "Técnico Agropecuario y similares",
      "Técnico en Acuicultura y similares",
      "Técnico en Alimentos y similares",
      "Técnico en Madera",
      "Bachillerato en Humanidades",
      "Bibliotecología",
      "Literatura y/o letras",
      "Periodismo y similares",
      "Técnico en Bibliotecología",
      "Técnico en Traducción, Interpretación y similares",
      "Traducción, Intérprete y similares",
      "Actuación y similares",
      "Arte y similares",
      "Composición, interpretación musical y similares",
      "Danza",
      "Música, Licenciatura en música",
      "Técnico en Artes Escénicas",
      "Animación digital y similares",
      "Cine y Televisión",
      "Comunicación Audiovisual, Digital y similares",
      "Dibujante Proyectista y similares",
      "Diseño",
      "Diseño de Interiores y similares",
      "Diseño de Vestuario",
      "Diseño Gráfico, Diseño Web y similares",
      "Diseño Industrial y similares",
      "Fotografía Profesional y similares",
      "Paisajismo y similares",
      "Técnico en Animación digital",
      "Técnico en Artes y similares",
      "Técnico en Comunicación Audiovisual y similares",
      "Técnico en Dibujo Arquitectónico, Dibujo Técnico y similares",
      "Técnico en Dirección y Producción de Eventos",
      "Técnico en Diseño Ambientes",
      "Técnico en Diseño de Vestuario",
      "Técnico en Diseño Gráfico y similares",
      "Técnico en Diseño Web y similares",
      "Técnico en Diseño, Ilustración y similares",
      "Técnico en Fotografía",
      "Técnico en Paisajismo",
      "Técnico en Restauración y similares",
      "Bachillerato en Ciencias y similares",
      "Bioingeniería",
      "Biología",
      "Biología Marina y similares",
      "Bioquímica",
      "Física, Astronomía y similares",
      "Geología",
      "Ingeniería Ambiental",
      "Ingeniería Civil Ambiental",
      "Ingeniería Civil en Biotecnología y similares",
      "Ingeniería en Biotecnología y similares",
      "Ingeniería en Geomensura y similares",
      "Ingeniería Química y similares",
      "Licenciatura en Ciencias y similares",
      "Química y carreras similares",
      "Técnico en Energías Renovables",
      "Técnico en Geología",
      "Técnico en Química, Análisis Químico y similares",
      "Técnico en Topografía",
      "Técnico en Vitivinicultura",
      "Antropología, Arqueología y similares",
      "Bachillerato en Ciencias Sociales y similares",
      "Ciencias Políticas y similares",
      "Filosofía",
      "Geografía",
      "Historia",
      "Psicología",
      "Sociología",
      "Teología",
      "Construcción Civil",
      "Ingeniería Civil en Obras Civiles y similares",
      "Ingeniería en Construcción y similares",
      "Ingeniería en Mantenimiento Industrial y similares",
      "Técnico en Construcción",
      "Técnico en Instalaciones Sanitarias y similares",
      "Técnico en Obras Civiles y similares",
      "Entrenador Profesional y similares",
      "Bachillerato en Ciencias de la Salud",
      "Enfermería",
      "Fonoaudiología",
      "Kinesiología",
      "Medicina",
      "Medicina Veterinaria",
      "Medicinas Alternativas",
      "Obstetricia y Puericultura",
      "Odontología",
      "Técnico en Fisioterapia, Kinesiología y similares",
      "Técnico en Medicinas Alternativas",
      "Técnico en Obstetricia y Puericultura",
      "Técnico en Odontología, Asistente Dental y similares",
      "Técnico en Veterinaria",
      "Terapia Ocupacional",
      "Ingeniería en Logística y similares",
      "Técnico en Logística y similares",
      "Educación Diferencial",
      "Educación Parvularia",
      "Pedagogía Básica y menciones",
      "Pedagogía en Artes",
      "Pedagogía en Biología, Química y similares",
      "Pedagogía en Castellano y similares",
      "Pedagogía en Educación Física y similares",
      "Pedagogía en Filosofía",
      "Pedagogía en Física",
      "Pedagogía en Historia y Geografía",
      "Pedagogía en Inglés y similares",
      "Pedagogía en Matemáticas",
      "Pedagogía en Música",
      "Pedagogía en Religión",
      "Pedagogía, Licenciatura en Educación y similares",
      "Psicopedagogía",
      "Técnico Educacional y similares",
      "Técnico en Educación Especial y/o Diferencial y similares",
      "Técnico en Educación Parvularia",
      "Ingeniería Civil en Computación y/o Informática",
      "Ingeniería en Computación e Informática y similares",
      "Ingeniería en Conectividad y Redes",
      "Técnico en Administración de Redes Computacionales",
      "Técnico en Análisis de Sistemas Informáticos",
      "Técnico en Computación e Informática",
      "Ingeniería Civil Eléctrica y similares",
      "Ingeniería Civil Mecánica",
      "Ingeniería Eléctrica y similares",
      "Ingeniería Electrónica y similares",
      "Ingeniería en Climatización, Refrigeración y similares",
      "Ingeniería en Mecánica Automotriz",
      "Técnico en Electricidad, Electrónica y similares",
      "Técnico en Mecánica Automotriz",
      "Técnico en Mecánica Industrial, mantención y similares",
      "Técnico en Refrigeración, Climatización y similares",
      "Producción de Eventos y similares",
      "Técnico en Administración de Empresas",
      "Técnico en Administración Pública",
      "Técnico en Comercio Exterior",
      "Técnico en Marketing",
      "Técnico en Producción de Eventos",
      "Técnico en Relaciones Públicas",
      "Administración de Empresas y/o Negocios Internacionales",
      "Administración Pública",
      "Contador Auditor",
      "Contador Público y/o General",
      "Ingeniería Comercial",
      "Ingeniería en Marketing y/o Comercial",
      "Relaciones Públicas",
      "Técnico Financiero",
      "Economía",
      "Técnico en Administración de Redes e infraestructura",
      "Técnico en Telecomunicaciones",
      "Ingeniería en Telecomunicaciones, Conectividad y Redes",
      "Trabajo Social",
      "Técnico en Trabajo Social",
      "Ingeniería Civil Industrial",
      "Ingeniería Industrial",
      "Técnico Industrial",
      "Derecho",
      "Técnico Jurídico y similares",
      "Ingeniería Civil en Minas",
      "Ingeniería en Minas",
      "Técnico en Minería y similares",
      "Ingeniería Civil en Metalurgia y/o Materiales y similares",
      "Ingeniería en Metalurgia y similares",
      "Técnico en Metalurgia",
      "Cartografía",
      "Diseño de Productos Multimedia",
      "Ingeniería en Prevensión de Riesgos",
      "Técnico en Diseño de Productos Multimedia",
      "Técnico en Prevención de Riesgos",
      "Técnico en Sonido y similares",
      "Técnico en Turismo",
      "Turismo, Hotelería y similares",
      "Otro",
    ],
    input_value: "",
    input_label: "Diseñador",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
  {
    key: "25",
    input_id: 15,
    input_type: 1, //0== textfield, 1 == combobox, 2==upload
    upper_text: "Tipo de trabajo",
    options: ["Dependiente", "Independiente"],
    input_value: "",
    input_label: "Dependiente",
    first_input: {},
    second_input: {},
    is_company: false,
    is_person: true,
  },
];

export default step2InputsArray;
