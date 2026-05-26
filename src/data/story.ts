import { StoryNode } from "@/types";

export const storyData: Record<string, StoryNode> = {
  intro: {
    id: "intro",
    title: "Introducción",
    text: [
      "Transcurre el crudo invierno de 1926 y te encuentras en la nutrida biblioteca de tu residencia en Boston, Massachusetts. Los periódicos han anunciado una dura nevada para esta noche y, desde tu posición junto a las estanterías, observas caer los primeros copos contra los cristales de la ventana.",
      "Tu nombre es Francis Wayland Thurston y trabajas en la Universidad de Brown, en Providence, Rhode Island. Ahora mismo estás disfrutando de unos días de descanso durante el parón de Navidad.",
      "Unos golpes en la puerta de tu estudio interrumpen tu lectura y tu ama de llaves entra en la habitación. Te entrega una carta que acaba de llegar. Al leerla, te encuentras con una trágica noticia: tu tío abuelo George Gammell Angell ha muerto. El historiador y antropólogo ejercía como profesor honorario de Lenguas Semíticas en tu misma universidad, y era un hombre apreciado y admirado por todos. Tenía noventa y dos años.",
      "En la carta se detallan las extrañas circunstancias del deceso. Según parece, fue empujado por un siniestro marinero de raza negroide. Este habría surgido de una casucha en la dársena cuando el profesor Angell regresaba del barco de Newport. Los médicos atribuyen su muerte a un fallo cardiaco, más que a la propia caída.",
      "En la misiva también se te comunica que eres su único heredero y albacea testamentario, y que su abogado te espera al día siguiente para hacerte entrega de los bienes que te ha legado.",
      "Inmediatamente haces la maleta y te preparas para el viaje.",
      "A la mañana siguiente, coges el tren rumbo a Providence…",
    ],
    choices: [{ text: "Pasa a la página 1", toId: "1" }],
  },
  "1": {
    id: "1",
    title: "Página 1",
    text: [
      "Tras el funeral del profesor Angell, regresas a tu residencia habitual de Providence donde pasas la mayor parte del año. Te entrevistas con el abogado de tu tío abuelo y te hace entrega de lo que te ha dejado en herencia. Curiosamente, se trata de los elementos de una investigación en la que el profesor debió de estar muy enfrascado. Delante de ti tienes una extraña caja cerrada con llave. Por suerte, también te hacen entrega del llavero que el profesor llevaba en uno de los bolsillos en el momento de su muerte.",
      "El contenido es por demás, enigmático:",
      "Dentro hay un bajorrelieve de arcilla, un manuscrito dividido en dos partes y un montón de recortes de periódico, junto a diversos apuntes de puño y letra del profesor.",
      "Todos estos elementos llaman mucho tu atención y despiertan tu ánimo investigativo. Además, ¿puede el contenido de esta caja estar relacionado de alguna manera con la extraña muerte de tu tío abuelo? Tal vez sí…",
      "En ese caso, ¿cuál de estos objetos te interesa analizar en primer lugar?",
    ],
    choices: [
      {
        text: "Si quieres echarle un vistazo al bajorrelieve de arcilla, ve a la página 32",
        toId: "32",
      },
      {
        text: "Si prefieres leer el manuscrito de puño y letra de tu tío abuelo, hazlo en la página 17",
        toId: "17",
      },
      {
        text: "Si lo que más te llama la atención son los recortes de periódico, échales un vistazo en la página 56",
        toId: "56",
      },
    ],
  },
  "2": {
    id: "2",
    title: "Página 2",
    text: [
      "No te podías imaginar que entre las páginas que trajiste de Noruega ibas a encontrar un relato tan demencial. La prosa de Johansen se vuelve casi palpable a tus ojos, y su descripción de los horrores que presenció en esa horrible isla tan desconocida como impronunciable, R’lyeh, te trastornan irremisiblemente.",
      "A partir de ese momento tu vida se convierte en una pesadilla constante: tienes sueños repetitivos y recurrentes sobre la extraña criatura escapada del sello de R’lyeh, y, aunque nunca la hayas visto y jamás hayas estado allí, sientes su llamada, susurrándote secretos y amenazas veladas, en cuanto cierras los ojos.",
      "Finalmente, tus constantes alaridos nocturnos colman la paciencia de tus vecinos. Estos, inquietos, irrumpen una noche en tu apartamento para horrorizarse con lo que ha quedado de ti: una criatura sucia, convulsa y desquiciada, que farfulla incoherencias sobre seres venidos de las estrellas y desconocidas ciudades sumergidas. Nadie sabe bien a qué atribuir estos desvaríos, aunque les llama la atención el bajorrelieve de arcilla al que pareces rendir culto con velas y pequeños sacrificios de animales. Los recortes de periódicos tapizan tus paredes y hay trozos de manuscrito que se acumulan por todo el apartamento y de los que, al parecer, ¡has llegado a comerte unos cuantos a puñados!",
    ],
    choices: [
      {
        text: "Sea como sea, todo el que te examina concluye en que lo mejor para ti es acabar recluido en la página 77",
        toId: "77",
      },
    ],
  },
  "3": {
    id: "3",
    title: "Página 3",
    text: [
      "Cuando leíste acerca de esta comuna de teósofos vestidos de blanco tu mente se formó la imagen de unos seudorreligiosos, quizá no del todo piadosos, pero sí virtuosos y moderados… como el padre Juárez.Pero cuando este te conduce a la sede de la cofradía —una galería baja, abarrotada de botes carcomidos por los percebes y chalupas a medio reparar— te encuentras con un grupo de rudos mercenarios del mar, tipos grasientos y musculosos, ordinarios y pedestres.Es una mezcla heterogénea de etnias y razas, en la que se aúnan norteamericanos, mejicanos,portorriqueños y algunos panameños.",
      "Todos visten largas túnicas blancas que les llegan hasta los tobillos. Sus rostros velludos asoman por la abertura superior de la sotana y les oyes gruñir y mascullar al tiempo que trabajan afanosamente en la reparación de muchísimo material náutico que, por su estado, parece rescatado de un naufragio. ",
      "- Como ve, no queda mucho para que la expedición esté preparada",
      "—¿Expedición? —preguntas—. ¿Se refiere a un viaje?",
      "-—Efectivamente. —Juárez hace una pausa dramática antes de continuar—. Durante las últimas dos semanas, muchos de estos hombres han manifestado síntomas de… telepatía. Desde entonces, llevo tomando nota cuidadosamente de las imágenes y las señales que han percibido. El Advenimiento está cerca, y estoy seguro de que esta vez nos encontraremos en el lugar propicio. Vamos a fletar un barco dentro de dos días, el San Juan Bautista, rumbo al océano Pacífico. Confío en que querrá unirse a nuestra expedición…",
      "—¿Qué es lo que buscamos, exactamente? ",
      "—R’lyeh, querido amigo. Nada menos que la mítica R’lyeh…",
    ],
    choices: [
      {
        text: "Es el momento de echar un vistazo al barco en el que la cofradía se dispone a emprender la travesía. Visita la página 90",
        toId: "90",
      },
    ],
  },
  "4": {
    id: "4",
    title: "Página 4",
    text: [
      "Das un giro completo a la rueda del timón y, en un arranque de locura, te dispones a embestir a la criatura.",
      "El barco va cobrando cada vez más velocidad, y mientras ves acercarse al ser que surca las aguas, sientes que tu cordura se tambalea. A medida que su inmensidad oscurece el mundo, sientes el deseo irrefrenable de lanzarte por la borda, pero sigues adelante.",
      "Toda la estructura del barco tiembla con un fuerte sonido de maderas quebradas y metal retorcido. Sales despedido por los aires, rodando por la cubierta hasta la proa… ¡hacia las tentaculares fauces del monstruo!",
      "El choque produce un estallido similar al que tendría lugar si se reventase una enorme vejiga, y de la criatura emana una fangosa suciedad verdinegra que desprende un hedor semejante al de mil tumbas abiertas, desparramándose sobre las tablas. Entonces, fijando sus múltiples ojos escleróticos en tu persona, escuchas cómo surge, desde debajo de sus serpenteantes zarcillos faciales, un ululante rugido alienígena que te acompañará para siempre en tus pesadillas. ",
      "A duras penas logras alzarte, trastabillando en medio de una ponzoñosa efervescencia a través de la cual ves cómo la criatura ya empieza a recomponerse. Es como un gigantesco farallón de carne y músculo que se alza imponente hasta ocultar el horizonte. Por suerte, da la sensación de que tu embestida ha causado más daño del que esperabas. Eso te brinda una oportunidad para dar la vuelta e intentar aprovechar los vientos impíos que se alejan de la ciudad cadáver de R’lyeh… ",
    ],
    choices: [
      {
        text: "Navegas hasta el final, en la página 11",
        toId: "111",
      },
    ],
  },
  // interlude_1: {
  //   id: "interlude_1",
  //   text: [
  //     "Toda la estructura del barco tiembla con un fuerte sonido de maderas quebradas y metal retorcido.",
  //   ],
  //   choices: [{ text: "Navegas hasta el final, en la página 111", toId: "11" }],
  //   isInterlude: true,
  //   imageUrl:
  //     "https://media.istockphoto.com/id/528729338/es/foto/monster-y-antiguo-barco.jpg?s=1024x1024&w=is&k=20&c=U8qgxqPToIazAxTlJ58D963FHkiKRicJwRqlLlp3XJM=",
  //   nextPageId: "111",
  // },
  "6": {
    id: "6",
    title: "Página 6",
    text: [
      "Dar con Arthur J. Webb, el hijo del profesor William Channing Webb, es bastante sencillo, ya que ha seguido los pasos de su padre y se trata de un reputado profesor de Antropología en la Universidad de Oxford. Su padre había sido famoso por sus viajes a Islandia y Groenlandia en busca de una serie de inscripciones rúnicas que, por desgracia,nunca llegó a encontrar",
      "Webb te recibe con cierta frialdad, pero queda inmediatamente fascinado cuando le enseñas lo que has heredado de tu tío abuelo. El manuscrito y los recortes de periódico no llaman demasiado su atención, pero se queda embelesado ante la contemplación del bajorrelieve de arcilla. Casi por casualidad, descubres que la decoración de su despacho contiene algunas obras artísticas que evidencian que ha estado en contacto con el llamado «Culto de Cthulhu». Las reproducciones del espantoso dragóncefalópodo se repiten una y otra vez, especialmente en láminas y manifestaciones pictóricas.",
      "—¡Esta es la obra de un verdadero acólito del Gran Cthulhu! —comenta, fascinado, mientras observa muy de cerca el bajorrelieve de Wilcox",
      "Le enumeras los esfuerzos investigativos que has llevado a cabo e inmediatamente te propone que le acompañes a un viaje que tiene planeado emprender rumbo a Groenlandia. Juntos iríais en busca de una degenerada tribu de esquimales que, parece ser, rinde culto a la antigua deidad.",
      "La oferta de Webb resulta muy tentadora, aunque el tono obsesivo y adulador con el que se expresa te revuelve el estómago… ",
      "Tienes que decidir tu rumbo.",
    ],
    choices: [
      {
        text: "Si te unes al profesor Webb en su expedición a Groenlandia, ve a la página 92 ",
        toId: "92",
      },
      {
        text: "Si prefieres abortar tu misión europea y regresar a casa, hazlo en la página 20",
        toId: "20",
      },
    ],
  },
  "7": {
    id: "7",
    title: "Página 7",
    text: [
      "No se trata de las Islas Gambier, ¡sino de la pérfida R’lyeh! La isla no tiene nada de particular, pero sí resulta inusual el litoral de lodo y ciclópea mampostería que se alza desafiante en medio de ella. Es una construcción erigida en base a una arquitectura imposible, ángulos no euclidianos y pendientes inverosímiles. Esta estructura abismal no solo desafía todas las leyes de la perspectiva, sino que emana de ella una pulsión alienígena completamente ajena a la esencia terrena.",
      "¡Es el hogar de los Primigenios! ¡Es la morada del Gran Cthulhu!",
      "Te acercas al padre Juárez, que tiembla y gimotea… Justo antes de que el San Juan Bautista toque tierra, el sacerdote lanza un grito triunfal que tiene mucho de aullido de fanático.",
      "—¡R’lyeh! ¡R’lyeh! ¡Cthulhu fhtagn!",
      "Los místicos que soñaban la ciudad imposible despiertan de su sopor. El barco encalla con una sacudida y la tripulación estalla de júbilo entre gritos lunáticos, cánticos extasiados y manifestaciones de demencia. Ni siquiera el padre Juárez mantiene la cordura. La pasarela de madera tiembla bajo tus pies mientras el clan de excitables teósofos desciende a trompicones. La morada del dios se encuentra a un cuarto de milla, pero su tamaño es tan imponente, y tan inquietantes sus formas ampulosas, que da la sensación de estar a dos pasos de ti.",
      "Ninguno de los tripulantes del San Juan Bautista ha dudado en lanzarse sobre esta tierra ignota, y corretean en dirección a una gigantesca puerta que sirve de sello para esa criatura a la que adoran. Puedes seguirlos, pero tal vez prefieras la relativa seguridad que te ofrece la embarcación…",
    ],
    choices: [
      {
        text: "Si decides seguir a los místicos hasta el interior de la isla, corre con ellos hasta la página 31",
        toId: "31",
      },
      {
        text: "Si, temeroso por el aspecto demencial de la construcción ciclópea, decides permanecer en el barco, observa lo que ocurrirá desde la página 84",
        toId: "84",
      },
    ],
  },

  "8": {
    id: "8",
    title: "Página 8",
    text: [
      "Sientes que la línea de investigación que sale de este extraño manuscrito no conduce a nada en concreto. Son testimonios curiosos y tal vez contengan algo cercano a la verdad, pero lo cierto es que no dejan de ser palabras escritas sobre papel, y que bien podrían ser parte de una fabulación o de un exceso de imaginación, tanto por parte del tal Wilcox como —Dios te perdone por pensarlo— de tu tío abuelo, el profesor Angell.",
      "Sientes que necesitas algo más tangible, algún elemento de investigación en el que puedas hincar el diente de verdad. Nuevamente plantado delante de la caja que has heredado, decides qué elemento examinar a continuación…",
    ],
    choices: [
      {
        text: "Si aún no has analizado al detalle el bajorrelieve de arcilla y te parece buena idea hacerlo, ve a la página 32",
        toId: "32",
      },
      {
        text: "Si todavía no les has echado un ojo a los recortes de periódico y te inclinas por examinarlos, hazlo ahora en la página 56",
        toId: "56",
      },
      {
        text: "Si, por el contrario, quieres leer la otra parte del manuscrito —el informe del inspector Legrasse— si aún no lo has hecho, ve a la página 51",
        toId: "51",
      },
    ],
  },

  "9": {
    id: "9",
    title: "Página 9",
    text: [
      "Tienes unos ahorros considerables, aunque posiblemente no te alcancen para financiar viajes a sitios tan remotos como la India o África —de donde también hay abundantes noticias—. Visitar lugares tan peligrosos como Sudamérica o Haití puede ser un suicidio para un norteamericano, así que concluyes que lo más seguro sería viajar dentro del territorio norteamericano o, como mucho, llegar hasta Europa.",
      "El caso de los teósofos de California resulta especialmente llamativo, así como el del suicida de Londres o el bochornoso escándalo en el Salón de Primavera de París, durante la exposición del espeluznante Paisaje Onírico.",
      "Dispuesto a preparar las maletas, ¿qué destino elegirás para comenzar a tirar del hilo?",
    ],
    choices: [
      {
        text: "Si decides viajar a San Francisco para seguir el rastro de los teósofos californianos, ve a la página 18",
        toId: "18",
      },
      {
        text: "También puedes coger un barco con rumbo a Marsella, desde donde te será fácil viajar hasta París y visitar el Salón de Primavera en la página 102",
        toId: "102",
      },
      {
        text: "Otra alternativa es viajar a Londres, en busca de más información sobre el misterioso suicida. Ve, entonces, a la página 95",
        toId: "95",
      },
    ],
  },

  "10": {
    id: "10",
    title: "Página 10",
    text: [
      "Estas páginas contienen un informe sobre los encuentros del profesor Angell con Henry Wilcox, el escultor que confeccionó la tablilla. Te llama la atención que la ejecución de la pieza tuviera lugar exclusivamente durante las horas de sueño del muchacho. Según tu tío abuelo, «el chico dice soñar con una antiquísima ciudad prehistórica surgida desde algún piélago subacuático desconocido, una metrópolis ancestral sembrada de pináculos y minaretes, de cuya superficie emana un limo verdoso y primordial».",
      "El profesor Angell había perdido el interés por la tablilla, ya que la arcilla recién modelada la volvía de todo menos un objeto arqueológico.",
      "La respuesta de Wilcox a estas palabras había dejado anonadado al profesor: «Es reciente, en efecto, pues la hice anoche mientras soñaba extrañas ciudades; pero los sueños son más antiguos que la taciturna Tiro, la contemplativa Esfinge o la rodeada de jardines Babilonia…».",
      "El periodo de alucinación de Wilcox tuvo lugar entre el 22 de marzo al 2 de abril de 1925. Esta etapa llena de delirios, sonambulismo y ejecución artística demencial coincidió no solo con el temblor de tierra más intenso que se recuerda en Nueva Inglaterra, sino también con los periodos alucinatorios de muchas otras personas —por lo general, artistas o gente de agudizada sensibilidad— a lo largo y ancho del mundo. La recuperación de Wilcox supuso el fin de la colaboración entre el artista y el profesor. Wilcox fue dado de alta, regresó a las clases en la Escuela de Bellas Artes y recuperó su alojamiento en el edificio Fleur-de-Lys, una residencia para estudiantes.",
      "Han pasado casi dos años desde los hechos que se narran en el manuscrito, pero te planteas hacerle una visita.",
    ],
    choices: [
      {
        text: "Si quieres entrevistarte con Wilcox, acude al edificio Fleur-de-Lys en la página 43",
        toId: "43",
      },
      {
        text: "Si prefieres seguir revisando el contenido de la caja, hazlo en la página 8",
        toId: "8",
      },
    ],
  },
  "11": {
    id: "11",
    title: "Página 11",
    text: [
      "Todo el turbio asunto alrededor del llamado «Culto de Cthulhu» te produce muy malas sensaciones. Es obvio que quien se aproxima demasiado a este tema acaba sufriendo terribles desgracias, como le ocurrió a tu tío-abuelo, el profesor Angell. ¿Y si la aproximación a los escabrosos rincones de este culto, sin llegar a matarte, te ocasionara un daño aún peor, como puede ser la locura o la obsesión?",
      "Tienes una vida acomodada y lo suficientemente anodina como para no desear nada más, así que esa misma noche arrojas al fuego el contenido completo de la caja que te ha legado el profesor Angell y toda la información que has recopilado por el camino. De reojo, y solo por curiosidad, alcanzas a vislumbrar una ínfima parte de los delirios del pobre profesor Angell… y las abominaciones que ves danzando entre las llamas te revuelven las tripas.",
      "Cuando los últimos rescoldos se agotan, te repantigas en tu sillón favorito, permaneces en silencio, disfrutando de la soledad y la seguridad que otorga la ignorancia de lo desconocido, concluyendo en que quizá está bien tener aventuras, pero que nada hay mejor que la preservación de la propia cordura.",
      "FIN",
    ],
    choices: [],
  },
  "12": {
    id: "12",
    title: "Página 12",
    text: [
      "—Me llamo Randolph Carter —dice el hombre cuando os acercáis. Tiene un aspecto macilento, y se nota que arrastra un cansancio extremo. Un detalle te resulta muy llamativo: alrededor de su cuello lleva una pequeña cadena de la que pende una llave plateada que emite un sobrenatural brillo argénteo",
      "—Me vendría bien un poco de compañía en este viaje —dice, señalando la pequeña embarcación que estaba a punto de botar sobre las tranquilas aguas de aquel mar ignoto—. Creo que cabremos todos en mi barca.",
      "En efecto, al subir, el barco parece mucho mayor y hay espacio para todos. Aunque ninguno sabe adónde se dirige Carter, no podéis evitar sentiros contagiados por el espíritu de aventura que encierra la misteriosa expedición marítima. La barca se hace a la mar y empieza a navegar a un ritmo parsimonioso. Sientes como si estuvieras deslizándote por un sueño, persiguiendo un destino imposible. La llave de plata de Carter emite fulgores que parecen convertirse en auroras que te mesmerizan.",
      "El viaje prosigue en silencio, en medio de una calma mefítica.",
      "Atrás queda aquella tierra de riscos y cavernas, hasta que la brillante luna solo ilumina un inmenso y negro océano de aguas mansas",
      "Todos estáis remando con regularidad, esforzados, y es en ese momento cuando te vienen las palabras a la boca: —¿Hacia dónde nos dirigimos? —preguntas. Hasta tu propia voz te suena pastosa y medio balbuciente, como si hablaras en sueños.",
      "—A la búsqueda de la ignota Kadath —responde Carter—. La ciudad de los Grandes Dioses",
      "La barca surca los mares y tú cierras los ojos. Sonríes y te abandonas, sabiendo que tu aventura no ha hecho más que empezar… ",
      "FIN",
    ],
    choices: [],
  },
  "14": {
    id: "14",
    title: "Página 14",
    text: [
      "Entiendes que si Wilcox fue importante para el profesor Angell, también puede serlo para tu investigación. Consigues sacarlo del recinto y le invitas a pasar algunas noches en el cuarto de invitados de tu casa en Boston, donde crees que podréis hablar tranquilamente y, en el caso de que vuelva a tener esas pesadillas, sacar algo de ellas. Wilcox, desesperado y necesitado de cualquier tipo de ayuda que alivie su soledad, accede a acompañarte. ",
      "Durante el día, Henry se muestra tranquilo y hastacoherente, aunque notas que su estado nervioso es muyvolátil y que en cualquier momento puede tener una crisis.Accede a hablarte de sus encuentros con el profesor Angelly de las conversaciones que mantuvieron acerca del llamado«Culto de Cthulhu». ",
      "Esa misma noche, y tras una copiosa cena, el muchacho  empieza a revolverse en sueños. Te acercas a su cama con una libreta y un lápiz y empiezas a tomar nota de todas sus reacciones y de los extraños balbuceos que profiere",
      "Estás convencido de que, tal y como ocurrió cuando se entrevistaba con el profesor Angell, de sus pesadillas destilará alguna revelación importante… ",
    ],
    choices: [
      {
        text: "Continúa apostado junto al lecho de Henry Wilcox, en la página 19 ",
        toId: "19",
      },
    ],
  },
  "15": {
    id: "15",
    title: "Página 15",
    text: [
      "Sin saber dónde estás ni adónde te diriges, continúas avanzando en la oscuridad. Lo que hasta hace poco eran lejanos balbuceos se convierten en voces humanas. Sientes un alivio inconmensurable al reconocer las voces del padre Juárez, de Salcedo y de Chávez. Parecen ser los únicos que han logrado sobrevivir al blasfemo despertar del Gran Cthulhu",
      "No pasa mucho tiempo hasta que tus ojos se acostumbran a la oscuridad. Da la sensación, a juzgar por el eco que generan vuestras voces, de que os encontráis en una catacumba. El instinto de supervivencia os empuja a seguir adelante pese a que, de alguna manera, tienes la impresión de que ya no te encuentras en “tu mundo”",
      "Tras una prolongada caminata a ciegas, desembocáis en una sala que, gracias a un mortecino resplandor fosforescente, cuenta con algo más de iluminación. Os miráis los unos a los otros: estáis cubiertos de la cabeza a los pies por una mucosidad viscosa, una sustancia gelatinosa que asociáis a la peculiar configuración anatómica del dios Cthulhu. ",
      "—¡Una salida! —exclama el padre Juárez señalando una abertura practicada en la roca tras la cual late un cadavérico resplandor verdoso.",
      "Os dirigís hacia allí, pero en ese momento interviene Salcedo.",
      "—Por allí hay otra grieta —indica.",
      "A mano izquierda se abre otra oquedad en la sólida, aunque irregular, estructura de la catacumba. En este caso, lo que se observa es un reflejo purpurado. Ninguno tiene la menor idea de adónde pueden conducir estos dos caminos; pero tenéis que decidiros por uno de ellos…",
    ],
    choices: [
      {
        text: "Si prefieres seguir el resplandor verdoso, hazlo en la página 29",
        toId: "29",
      },
      {
        text: "Si te inspira más confianza el pulsátil reflejo purpureo, síguelo en la página 40",
        toId: "40",
      },
    ],
  },
  "17": {
    id: "17",
    title: "Página 17",
    text: [
      "El manuscrito consta de dos fajos de papeles claramente divididos y atados con cuerda de arpillera. Los dos segmentos están titulados con la impecable caligrafía de tu tío abuelo, aunque ambos tienen un título general en común: «EL CULTO DE CTHULHU».",
      "La primera mitad del manuscrito lleva como epígrafe el siguiente apunte: «1925. Sueño y obra ejecutada en sueños, de H. A. Wilcox, Thomas St. 7, Providence (Rhode Island)». El segundo segmento se titula: «Informe del inspector John R. Legrasse, Bienville St, 121, Nueva Orleans (Luisiana), al Congreso de la Sociedad Americana de Arqueología, 1908. Notas sobre la misma, y declaración del profesor Webb».",
      "Parecen temas bastante serios y profusamente documentados… ¿Cuál de los dos segmentos te gustaría analizar primero?",
      "¿O tal vez prefieras regresara a la caja y empezar por otro elemento?",
    ],
    choices: [
      {
        text: "Si eliges la descripción del sueño y de la obra realizada en sueños por Henry Wilcox, ve a la página 10",
        toId: "10",
      },
      {
        text: "Si prefieres empezar por el informe del inspector Legrasse, ponte a leerlo en la página 51",
        toId: "51",
      },
      {
        text: "Si aún no le has echado un vistazo al bajorrelieve de arcilla y quieres hacerlo, ve a por él en la página 32",
        toId: "32",
      },
      {
        text: "Si todavía no has examinado los recortes de periódico y crees que es lo más interesante de todo, ve a la página 56",
        toId: "56",
      },
    ],
  },
  "18": {
    id: "18",
    title: "Página 18",
    text: [
      "Desembarcas en San Francisco, convencido de estar siguiendo la pista correcta.",
      "Según los apuntes del profesor Angell, la comuna de teósofos tiene su residencia en un lugar llamado San Juan Bautista, una pequeña ciudad del condado de San Benito. Hay allí una misión, bajo la tutela de un tal padre Juárez, sobre la que se han extendido oscuros rumores por las cercanías. Los parroquianos hablan de cultos inconfesables y extraños monjes que adoran a dioses impíos. Por supuesto, de ser ciertos los más horripilantes relatos acerca de sacrificios rituales y desapariciones de niños, las autoridades ya habrían intervenido… ¿verdad?",
      " No te cuesta mucho trabajo dar con la misión después de preguntar a algunos de los lugareños. Se trata de una iglesia mal encalada y de aspecto ascético y frugal. Allí preguntas a varias personas por el padre Juárez hasta que un atolondrado monaguillo no tarda en conducirte hasta él.",
    ],
    choices: [
      {
        text: "Entrevístate con el padre Juárez en la página 41",
        toId: "41",
      },
    ],
  },
  "19": {
    id: "19",
    title: "Página 19",
    text: [
      "El escultor se retuerce en sueños, sus globos oculares se agitan tras los párpados como si tratasen de escapar de su cráneo y todo su cuerpo sufre unas horribles convulsiones. De la boca comienza a regurgitar una espuma viscosa. Es entonces cuando empieza a recitar algo en un idioma que no reconoces. Tratas de tomar notas, pero sus palabras pertenecen a un lenguaje demencial y espeluznante a base de gañidos y sibilantes construcciones sonoras. Lo que estás haciendo con Wilcox debe ser muy parecido a lo que hizo el profesor Angell hace dos años.",
      "El artista agita las manos en espasmos antinaturales. Ante la imposibilidad de que pronuncie alguna palabra mínimamente entendible, colocas el papel sobre su pecho y el lápiz en su mano, con la esperanza de que pueda transcribir algo de ese sueño espantoso. Efectivamente, sus dedos empiezan a garabatear sobre el papel. Cuando termina, tan solo hay escrita esta confusa combinación de letras y números: «OP 47-9 S 126-43 O». Por último, Wilcox profiere un grito desgarrador y despierta irguiéndose como impulsado por un resorte. Está empapado en sudor y sumamente agitado.",
      " Te observa con los ojos muy abiertos hasta que, finalmente, parece reconocerte.",
      "—La he visto—dice—. ¡La he visto!",
      "—¿Qué? —preguntas, aunque ya intuyes la respuesta.",
      "—La ciudad… la ciudad de mis sueños… la ciudad de mis pesadillas… la ciudad que se alza desde el fondo del mar… la ciudad que es un monstruo… la ciudad que es un dios… ¡R’lyeh! ¡R’lyeh! ¡Cthulhu fhtagn! —grita",
      "Todo resulta muy demencial, no tienes ni idea de qué está hablando Wilcox, pero tal vez te estés acercando al fondo de la cuestión. La pregunta es: ¿estás preparado para enfrentarte a ese fondo?",
    ],
    choices: [
      {
        text: "Si te parece buena idea intentar desentrañar el garabato de Wilcox y el significado de su sueño, ve a la página 45",
        toId: "45",
      },
      {
        text: "Si crees que estos sueños solo son los desvaríos de un lunático y prefieres seguir investigando por otro lado, puedes consultar otros objetos que contiene la caja en la página 35",
        toId: "35",
      },
      {
        text: "Si todo te resulta demasiado peligroso y crees que estás siguiendo los pasos de tu tío abuelo, abandona la investigación en la página 11",
        toId: "11",
      },
    ],
  },
  "20": {
    id: "20",
    title: "Página 20",
    text: [
      "La verdad es que parece que estás dando vueltas por el mundo sin conseguir nada en concreto. Tienes la sensación de que te has dedicado a seguir pistas bastante endebles. Tal vez lo mejor que puedes hacer es centrarte en las líneas de investigación que tienen lugar en territorio americano. Al fin y al cabo, fue allí donde el profesor Angell consiguió la información más “inquietante”, ¿no?",
      "Uno de los casos más llamativos de los que ves recopilados en los recortes de periódico de tu pobre tío es el de la cofradía de teósofos de California. Otra opción interesante puede ser visitar al inspector Legrasse en Luisiana, si aún no lo has hecho.",
      "¿Hacia dónde te dirigirás a continuación?",
    ],
    choices: [
      {
        text: "A las soleadas tierras californianas en la página 18",
        toId: "18",
      },
      {
        text: "O visita al inspector Legrasse en Nueva Orleans, si aún no lo has hecho, en la página 86",
        toId: "86",
      },
    ],
  },
  "21": {
    id: "21",
    title: "Página 21",
    text: [
      "El barco atraca en Nueva York después de unas jornadas de travesía insoportables. Has resistido a la tentación y no te has deshecho del Paisaje Onírico, pese a la repugnancia que te produce su mera presencia. Tienes la sensación de que tu cordura es como una delgadísima capa de hielo que puede colapsar en cualquier momento. Con el cuadro siempre cubierto por el paño, regresas a Providence.",
      "Estás otra vez en casa, pero ni siquiera el entorno familiar te tranquiliza. Colocas el cuadro sobre un atril y sientes que te llama una y otra vez; incluso parece que hubiera unas formas sinuosas desplazándose por debajo de la cobertura del paño.",
      "Desquiciado, te lanzas sobre él y arrancas la tela que lo cubre. La obra de Ardois-Bonnot es un absoluto delirio pictórico: en la imagen se observa un atolón de tierra verdosa surgido de un abismo acuático de profundidades insondables. Es apenas un islote, pero en su superficie se yergue una fastuosa ciudad poblada de minaretes, pináculos y obeliscos cubiertos de un chorreante limo verdoso. La contemplación de esta inmemorial urbe emergida te provoca un escalofrío incontenible.",
      "Un segundo después ¡la pintura del cuadro metamorfosea en un escenario de locura total! De las entrañas de la ciudad sumergida, y gracias al desplazamiento de los óleos, que parecen gotear y desgarrarse a medida que se recomponen ante tus ojos, surge una inmensa criatura cefalópoda con tentáculos faciales y alas rudimentarias.",
      "¡El cuadro ha cobrado vida!",
      "La criatura se desplaza hacia delante en el lienzo. Es gigantesca y demencialmente alienígena.",
      "En ese momento, un temblor en la tierra te lleva a proferir un grito de locura desgarrador. Caes al suelo y te arañas el rostro furiosamente. Cuando la visión ya empieza a teñírsete de rojo, pierdes el sentido…",
    ],
    choices: [
      {
        text: "Al despertar, estarás en la página 77",
        toId: "77",
      },
    ],
  },
  "22": {
    id: "22",
    title: "Página 22",
    text: [
      "Algo va mal con ese cuadro y lo sabes. Sin duda, enloqueció a Ardois-Bonnot, su autor, y puede que también a todos aquellos que lo llegaron a contemplar en el Salón de Primavera de hace dos años… Y estás seguro de que, si no te deshaces de él, acabará por enloquecerte a ti también. Sin quitarle el envoltorio, lo coges y te aproximas a la borda de estribor. Es una noche silenciosa y estrellada sobre las negras aguas del océano Atlántico. Sin pensarlo más, arrojas el cuadro al mar, e inmediatamente te invade una sensación de alivio absoluto. Una sensación que te permitiría descansar tranquilo, de no ser porque podrías jurar que cuando el lienzo tocó las aguas, algo, una siniestra y oscura simetría, rieló en las profundidades para arrastrarlo con ella a las insondables simas del océano. O si no, ¿cómo se explica que, al asomarte temeroso por encima de la barandilla, no distingas ni rastro de las ligeras maderas flotando lánguidamente sobre la superficie?",
      "Aterrado, pero convencido de haber hecho lo correcto, te diriges a tu camarote y, por primera vez en mucho tiempo, duermes como un bebé durante horas.",
    ],
    choices: [
      {
        text: "Despierta, aliviado, en la página 50",
        toId: "50",
      },
    ],
  },
  "23": {
    id: "23",
    title: "Página 23",
    text: [
      "Nadas como nunca buscando ganar la costa, en la página 52",
      "Decides que es una locura embestir a semejante criatura con el barco, así que le das la máxima potencia a las calderas e intentas huir en dirección contraria. No obstante, pronto te das cuenta de que el avance de la bestia es demasiado veloz debido a su tamaño descomunal.",
      "La criatura ruge furiosa y se alza en toda su maligna magnificencia. Su siniestra silueta se recorta proyectando una sombra que te sumerge en una noche antinatural. Cthulhu levanta una de sus gigantescas garras y se dispone a destruir la embarcación.",
      "A tus espaldas, sientes un bramido tremendo, apestoso y alienígena. Bajo tus pies, las tablas comienzan a crujir y el metal de la endeble embarcación, tiembla. Notas cómo la poderosa extremidad sale proyectada cuando una corriente de aire salvaje y pestilente te impacta. Durante un segundo, el tiempo parece detenerse para, un instante después, producirse un estallido brutal tras el cual sales disparado por la borda, cayendo de cabeza al mar. En medio del aturdimiento y el agua helada, un tremendo estampido en la superficie y una poderosa fuerza de succión que te arrastra hacia la bestia y las profundidades que la rodean, te da a entender que Cthulhu ha comenzado a despedazar el barco.",
    ],
    choices: [],
  },
  "24": {
    id: "24",
    title: "Página 24",
    text: [
      "Entendéis que es una locura subir a aquel barco. La apariencia de los tripulantes resulta casi más amenazadora que permanecer en aquellos mares ignotos.",
      "Siguiendo un viejo código marinero, dejáis los remos en posición horizontal; así dais a entender a los viajeros que no vais a abordar su embarcación. Esta da la vuelta y se pierde en el horizonte.",
      "Permanecéis a la deriva durante un tiempo que se hace eterno. El hambre y la sed os empiezan a acosar. En estas latitudes extrañas no hay viento ni tormentas. La embarcación permanece quieta sobre el agua a menos que reméis, cosa que hacéis durante días y días.",
      "Os miráis a los ojos con suspicacia y, de pronto, ya dejáis de veros como a seres humanos. Ahora sois pellejudos esqueletos envueltos en carne escuálida… ¡Carne que podría alimentar vuestros estómagos vacíos! La sed también resulta insoportable, hasta el punto en el que Salcedo se pone a beber agua de mar como un loco. Evidentemente, enferma sin remedio. Los siguientes días son una pesadilla de vómito y pestilencia hasta que, por fin, muere entre un charco de excremento y terribles convulsiones. Chávez, el padre Juárez y tú sabéis muy bien qué hacer con el cadáver…",
      "Dos días después, es el párroco el que perece, tal vez con un poco de ayuda. Dais buena cuenta de él. Saciáis el hambre con su carne y la sed con su sangre. El horror de vuestros actos de canibalismo apenas penetra en vuestras mentes, anestesiadas por la locura más densa y pegajosa.",
      "Ya no te quedan energías ni esperanzas para remar. Os pasáis las horas mirándoos el uno al otro entre sonrisas lobunas, sabiendo que el primero que flaquee servirá de alimento para el otro, y que, quizá, al único superviviente le espere un destino aún más horrendo: ¡devorarse, poco a poco, a sí mismo!",
      "FIN",
    ],
    choices: [],
  },
  "25": {
    id: "25",
    title: "Página 25",
    text: [
      "No has venido hasta aquí para arrojarte a una oquedad preñada de locura. ¡Que esta cofradía de lunáticos lo haga si quiere! Tú intentarás sobrevivir.",
      "Una vaharada de respiración pestilente te baña de arriba abajo. ¡Parece que el Gran Cthulhu te ha localizado! Desesperadamente, te deslizas por la puerta en diagonal y te dejas caer hacia unas escaleras de piedra.",
      "Cuando falta poco para llegar al final, comprendes que tal vez no ha sido una buena idea, pues el impacto va a ser brutal.",
      "Aun con el rugido de las olas y el bramido de la criatura a tus espaldas, oyes el estallar de los huesos cuando se te fracturan ambas piernas al estrellarte contra las rocas.",
      "Articulas un grito de dolor supremo, pero en realidad lo que más te atenaza es el horror que viene a tus espaldas, haciendo retemblar el suelo con cada zancada.",
      "Cthulhu, el dios primigenio surgido de las estrellas que por fin ha despertado de su sueño milenario, te observa con sus ojos sanguinosos. Lo ves cernirse sobre ti, inmenso, como una cordillera brotando de una fosa abismal, y no comprendes cómo su mera existencia y posterior contemplación no han despedazado aún tu cordura.",
      "De todas maneras, estas reflexiones apenas duran un segundo… Justo lo que tarda la criatura en dejar caer una zarpa descomunal. Ni siquiera logras sentir el contacto de su presa gelatinosa cuando tu cuerpo estalla, aplastado y desintegrado por su furia.",
      "Tus días han acabado, y quizá sea una suerte. En los próximos meses, lo que quede de la humanidad podrá sufrir su tiránico dominio… Por fin, Cthulhu ha reclamado lo que una vez fue suyo.",
      "FIN",
    ],
    choices: [],
  },
  "26": {
    id: "26",
    title: "Página 26",
    text: [
      "De las profundidades de la grieta surge una masa gelatinosa que identificas con la figura representada en la tablilla. ¡Es el Gran Cthulhu!",
      "Es un ser inmenso, un dragón-cefalópodo con alas en la espalda, tentáculos faciales y enormes zarpas rematadas en garras. Los teósofos que se encuentran más cerca de la puerta son inmediatamente aplastados por su mole.",
      "Los supervivientes intentan huir mientras lanzan alaridos de pavor. Cthulhu los arrolla como a molestas larvas. Muchos caen sin remedio al interior de la grieta, a ese oscuro abismo donde hasta hace poco yaciera la criatura.",
      "El dios Primigenio se yergue en toda su dimensión y tú, desde la cubierta del San Juan Bautista, lo observas aterrorizado.",
      "Las calderas todavía funcionan y, aunque tus conocimientos de navegación son escasos, logras hacer zarpar el buque.",
      "Empiezas a dejar atrás R’lyeh, pero ante tu más absoluto pavor, ¡Cthulhu viene detrás de ti…!",
      "La criatura se lanza desde el borde de la isla hasta las profundas aguas. Su zambullida provoca una enorme ola que viaja en tu dirección y que a punto está de hacer zozobrar al San Juan Bautista…",
      "Cthulhu se acerca con la cabeza asomando por encima de la línea de flotación. Sus terribles ojos carmesí están clavados en el barco… ¡y en ti!",
      "Barajas tus opciones y a tu mente acude una idea suicida. ¿Y si das la vuelta y lo embistes con la embarcación? Supones que significaría una muerte segura… igual de segura que si permites que ese ser antinatural quede libre en el mundo.",
      "Colocas las manos sobre el timón y, respirando profundamente, te aprestas a tomar una decisión.",
    ],
    choices: [
      {
        text: "Si das un giro de ciento ochenta grados al barco y embistes a Cthulhu, ve a la página 4",
        toId: "4",
      },
      {
        text: "Si por el contrario decides seguir huyendo hacia delante, hazlo en la página 23",
        toId: "23",
      },
    ],
  },
  "28": {
    id: "28",
    title: "Página 28",
    text: [
      "Desde debajo de la mesa, antes de que Connolly tenga tiempo de repetir su pregunta, aprietas el gatillo. El proyectil atraviesa la delgada superficie de madera y va a incrustarse en la frente del pendenciero capitán, matándolo antes de tocar el suelo. Wilcox te mira mientras un auténtico revuelo comienza a organizarse en cubierta. El muchacho se apresura a coger el mosquete que teníais en el camarote.",
      "Lo que sigue a continuación parece extraído de una de las novelas de piratas de Salgari o Stevenson: Los marineros pretenden entrar en desbandada en el camarote, pero debido a la estrechez de la puerta se agolpan unos sobre otros. Wilcox y tú, estratégicamente emboscados, los vais liquidando sin piedad. Pese a la brutal masacre que estáis cometiendo, los bucaneros no cejan en su empeño y gritan de delirio y éxtasis. Entonces, entiendes el motivo por el cual os resulta tan sencillo acabar con ellos: todos están borrachos como cubas. En menos de diez minutos absolutamente demenciales, los quince tripulantes del Neptuno yacen ensangrentados en el interior del camarote de popa, no muy lejos de la escalerilla. No das crédito al ver la pila de cadáveres de la que sois responsables.",
      "La investigación del «Culto de Cthulhu» te ha convertido en un aventurero. ¿O tal vez en un monstruo?",
      "—Vamos —dices a Wilcox—. Connolly dijo que ya no quedaba mucho para llegar.",
      "Wilcox y tú, todavía armados, salís a cubierta, donde en la distancia por fin divisáis aquello que habéis venido a buscar…",
    ],
    choices: [
      {
        text: "Contémplalo en la página 96",
        toId: "96",
      },
    ],
  },
  "29": {
    id: "29",
    title: "Página 29",
    text: [
      "Os internáis en la oquedad iluminada por el resplandor verdoso y, no mucho más adelante, comenzáis a oír el ritmo demencial de un cántico impío. No reconocéis ni una de las palabras que componen esta letanía pagana, pero, así y todo, os esperanzáis con la posibilidad de encontrar a otras personas.",
      "El túnel desemboca en el lecho de un río de aguas turbias. Es una corriente oleaginosa que deriva en un abismo espeluznante de simas insondables.",
      "Alrededor de una inexplicable columna de fuego verde, observáis la presencia de una multitud encapuchada que hasta ese momento os da la espalda. Parecen estar celebrando un ritual alrededor de la columna de llamas fungosas.",
      "—Es el Rito del Invierno —dice el padre Juárez en un susurro ahogado por el pánico—. Más antiguo que el género humano, y condenado a sobrevivirle…",
      "—Mejor regresemos —propone Salcedo—. Esos tipos encapuchados parecen peligrosos.",
      "—¡No! —exclama Chávez en un susurro—. Tal vez puedan ayudarnos a encontrar una salida…",
      "Tus tres acompañantes se miran entre sí, dudosos.",
      "—¿Qué opina usted, señor Thurston? —pregunta el padre Juárez.",
      "Como siempre, parece que te va a tocar a ti decidir…",
    ],
    choices: [
      {
        text: "Si eliges interrumpir el ritual y entrar en contacto con los encapuchados, dirígete a la página 68",
        toId: "68",
      },
      {
        text: "Si por el contrario crees que pueden ser peligrosos, regresa por donde has venido y encara el camino de la luz purpurada, en la página 40",
        toId: "40",
      },
    ],
  },
  "30": {
    id: "30",
    title: "Página 30",
    text: [
      "Estos tipos no son de fiar, pero al fin y al cabo es la única forma que tienes de fletar un barco por tu cuenta e intentar llegar a R’lyeh ahora que ya tienes lo más complicado: las coordenadas exactas.",
      "Connolly organiza a su gente y tú te reúnes con Wilcox en el camarote de popa. Es probable que el muchacho vuelva a experimentar sueños extraños y alucinatorios durante la travesía, y no deberías separarte de él en ningún momento. Wilcox insiste en llevar el bajorrelieve que él mismo ha confeccionado y tú cargas con los manuscritos y recortes de periódico que te ha legado el profesor Angell.",
      "La embarcación parte de Boston a las tres de la madrugada, de forma sigilosa. El horario, tan inusual, obedece a la necesidad de eludir a las autoridades portuarias y así evitar el engorroso papeleo y la sucesión de autorizaciones de las que carecéis. Lo malo es que, si algo os pasase, nadie sabría que habéis zarpado. Deberías tratar de apartar esos ominosos pensamientos.",
      "Hay viento a favor, así que confías en que la travesía sea rápida y sin complicaciones. Os encamináis por la vía marítima hasta el canal de Panamá, donde todavía no sabes cómo haréis para pasar esta embarcación ilegal, rumbo al Pacífico…",
    ],
    choices: [
      {
        text: "Ya buscaréis la forma de hacerlo cuando lleguéis a la página 39",
        toId: "39",
      },
    ],
  },
  "31": {
    id: "31",
    title: "Página 31",
    text: [
      "Desciendes del barco e intentas organizar la expedición, luchando contra el éxtasis que invade a todos tus compañeros.",
      "Una vez calmados los ánimos y organizadas las funciones de cada uno, emprendéis el peregrinaje hasta la morada de Cthulhu, atravesando depresiones e irregularidades geológicas plagadas de monolitos y limosos pináculos de incomprensible factura.",
      "La atmósfera inexplicable e irreal de toda la isla confunde tus conceptos de «horizontalidad» y «verticalidad». La demencia absoluta con la que ha sido trazada la arquitectura de esta chorreante Babilonia hace ver una concavidad donde, a primera vista, parecía haber una convexidad, lo que dificulta vuestro avance. Salientes y oquedades, simas y depresiones se alternan sobre un suelo resbaladizo, cubierto de algas y légamo verdoso.",
      "Finalmente arribáis a lo que creéis que es la cumbre de la pendiente, pero pronto descubres que todos estáis gateando, por lo que llegas a la conclusión de que, en realidad, habéis atravesado una plataforma horizontal inclinada.",
      "Delante vuestro aparece la descomunal puerta labrada. Te fuerzas a darle esa consideración porque su estructura se compone de dintel, umbral y jamba, aunque no podéis dejar de preguntaros cómo o para qué una puerta pudiera ser tan grande.",
      "En el centro del soportal se alza la figura tallada del dragón-cefalópodo. No cabe duda de que se trata de la morada del Gran Cthulhu y de que os encontráis en la mítica ciudad cadáver: R’lyeh.",
      "Todos te observan, pues está claro que eres tú quien toma las decisiones…",
    ],
    choices: [
      {
        text: "Si crees que lo mejor es intentar forzar la puerta y descubrir la posible morada del dios, lánzate a ello en la página 66",
        toId: "66",
      },
      {
        text: "Si consideras que es una locura estar siquiera cerca de esta demencial estructura, intenta convencerles de regresar al San Juan Bautista en la página 75",
        toId: "75",
      },
    ],
  },
  "32": {
    id: "32",
    title: "Página 32",
    text: [
      "La figura de arcilla representa a un monstruo que solo una imaginación enferma podría concebir. Sugiere la imagen amalgamada de una criatura humanoide a medio camino entre un dragón y un pulpo. Junto al bajorrelieve, hay unas notas manuscritas de tu tío abuelo en las cuales se refleja que no ha sido capaz de descifrar el contenido de los indescriptibles jeroglíficos tallados en la tablilla pese a sus conocimientos y probada erudición. También hay una breve descripción del artista que se encargó de tallarlo. Su nombre es Henry Anthony Wilcox, domiciliado en el Edificio Fleur-de-Lys, una residencia para artistas próxima a la Escuela de Bellas Artes de Rhode Island.",
      "Puede que sea una buena idea hacerle una visita a este escultor.",
      "¿O tal vez prefieres examinar el resto del contenido de la caja del profesor Angell?",
    ],
    choices: [
      {
        text: "Si decides visitar a Wilcox en la residencia, ve a la página 69",
        toId: "69",
      },
      {
        text: "Si aún no has leído el manuscrito de puño y letra de tu tío abuelo y te interesa ojearlo, hazlo en la página 17",
        toId: "17",
      },
      {
        text: "Si todavía no ha examinado los recortes de periódico y quieres hacerlo, ve a la página 56",
        toId: "56",
      },
    ],
  },
  "33": {
    id: "33",
    title: "Página 33",
    text: [
      "Extraes la tablilla, pero casi no te da tiempo a hablar. El recepcionista ha vigilado atentamente todos tus movimientos y no tarda en pulsar un timbre. Cinco segundos después, se presentan en recepción cuatro fornidos enfermeros que, contra tu voluntad, te sujetan fuertemente de piernas y brazos y te conducen hasta las dependencias internas del manicomio. Da igual que patalees, grites o te desgañites reivindicando tu cordura.",
      "—Aquí tenemos a otro de los lunáticos de Cthulhu —murmura uno de los enfermeros.",
      "—Se reproducen como setas —dice el otro.",
      "Te acarrean hasta un enorme salón. Allí te encuentras con un enjambre de enfermos mentales que, sumamente concentrados, tallan con sus manos unos bajorrelieves muy similares al que llevas en tus manos. El suelo está sembrado de manchurrones de arcilla fresca, y los locos exhiben una mirada enajenada que no se despega de su trabajo artístico. En el alto techo de este salón resuena un grito constante y enloquecedoramente repetitivo: ¡Iä, Iä Cthulhu fhtagn, Iä, Iä Cthulhu fhtagn, Iä, Iä Cthulhu fhtagn!… Los locos lo repiten sin cesar, subiendo el tono con cada iteración, hasta que esta demencial letanía te hace proferir un grito espantoso, tras el cual pierdes el sentido y todo se vuelve negrura absoluta…",
    ],
    choices: [
      {
        text: "Despiertas, completamente enloquecido, en la página 77",
        toId: "77",
      },
    ],
  },
  "34": {
    id: "34",
    title: "Página 34",
    text: [
      "Camuflas tu identidad haciéndote pasar por un antiguo tutor de Wilcox y evitas cualquier mención del bajorrelieve. En recepción te indican cómo llegar hasta la habitación del escultor. Accedes a ella dejando atrás un largo corredor en penumbra. La caminata se hace cruda y penosa debido a los gritos demenciales de los internos, que te erizan los pelos y te crispan los nervios. Ignorando las súplicas de ayuda, las risas incontroladas y los llantos miserables, continúas tu camino, rezando por no acabar, algún día, como estas pobres gentes.",
      "Tras una larga- peregrinación en solitario, llegas al final del corredor, abres la puerta y penetras en la habitación de Henry Wilcox.",
    ],
    choices: [
      {
        text: "Entrevístate con él en la página 44",
        toId: "44",
      },
    ],
  },
  "35": {
    id: "35",
    title: "Página 35",
    text: [
      "Tienes la sensación de que este joven escultor, Henry Wilcox, ha atravesado algún peligroso abismo que lo ha llevado al borde de la locura. Además, recuerdas que su cercanía y su contacto con el profesor Angell acabaron de muy mala manera para tu tío abuelo.",
      "Su colección de objetos paganos, sin duda producto de su galopante delirio, te genera unas sensaciones internas realmente desagradables. Solo pensar en la habitación pestilente del muchacho te pone los pelos de punta, así que decides abandonar su compañía y centrarte en alguno de los otros elementos que el profesor Angell ha recopilado con tanto esmero.",
      "Te despides de Wilcox con una excusa no demasiado elaborada. Él te ruega que por favor no le dejes a merced de aquellas efigies que su misma locura ha despertado, pero haces oídos sordos…",
    ],
    choices: [
      {
        text: "Puedes refugiarte en la consulta de los recortes de periódico en la página 56",
        toId: "56",
      },
      {
        text: "Si prefieres leer el manuscrito de puño y letra de tu tío abuelo, ve a la página 17",
        toId: "17",
      },
    ],
  },
  "36": {
    id: "36",
    title: "Página 36",
    text: [
      "El infausto Manicomio de Arkham, sobre el que corren oscuras leyendas acerca de terapias electroconvulsivas, lobotomías ilegales y trepanaciones carniceras. ¡Solo el aspecto del edificio ya te pone los pelos de punta!",
      "Te presentas ante el mostrador de recepción y preguntas por un paciente que está ingresado allí desde hace tres semanas: Henry Anthony Wilcox. El recepcionista te mira con suspicacia y acto seguido te pregunta quién eres y cuáles son las razones de tu visita. Esta actitud recelosa despierta tus sospechas, con lo cual, te planteas si mentir o, por el contrario, exponer con sinceridad los motivos de tu entrevista.",
      "¿Qué decides?",
    ],
    choices: [
      {
        text: "Mentir y decirle que eres un antiguo tutor de Wilcox, y que tras visitar a sus padres en Waterman Street supiste que se encontraba ingresado allí (ve a la página 34)",
        toId: "34",
      },
      {
        text: "O extraer de entre tus pertenencias el bajorrelieve de arcilla y exponer los motivos reales que te han llevado al manicomio de Arkham (ve a la página 33)",
        toId: "33",
      },
    ],
  },
  "37": {
    id: "37",
    title: "Página 37",
    text: [
      "Zarpas en busca de R’lyeh junto al padre Juárez y su comuna de sospechosos teósofos. La travesía es arriesgada y sumamente accidentada, especialmente a causa de las inesperadas tormentas tropicales que os azotan durante las primeras jornadas. El San Juan Bautista es un barco endeble y fabricado por aficionados, lo cual te hace pensar que quizá no has tomado la decisión más acertada.",
      "Tras cuatro días de azarosa navegación, un intenso e impenetrable banco de niebla se adueña del horizonte y quedáis atrapados en una mortal calma chicha. El mar, negro y calmado como un plato de sopa, apesta a pescado y algas en descomposición. Al mirar por la borda, tienes la impresión de encontrarte atrapado en un decorado teatral, ya que el barco parece una estructura fija en mitad de una pequeña piscina de agua sucia.",
      "Chávez, un obtuso marinero portorriqueño que ejerce de capitán, no da con la fórmula para recuperar el rumbo. No sopla la más ligera brisa y la tripulación empieza a inquietarse. Para colmo de males, tanto la brújula como muchos otros de los instrumentos magnéticos han dejado de ser fiables y cada uno apunta a un lugar diferente sin que haya una razón aparente. La niebla no permite distinguir ninguno de los puntos cardinales, ¡a duras penas os llegáis a ver las manos delante de la cara!",
      "Cuando creéis que debe haber caído la noche, a estribor se vislumbra un resplandor verdoso de origen inexplicable, una especie de aurora boreal totalmente fuera de sitio.",
      "El padre Juárez se acerca a ti.",
      "—No sabemos qué rumbo tomar, señor Thurston… ¿Por qué no nos echa una mano?",
    ],
    choices: [
      {
        text: "Si decides seguir las señales de esas extrañas luces en el cielo neblinoso, navega hacia la página 63",
        toId: "63",
      },
      {
        text: "Si, por el contrario, ese resplandor te resulta sumamente amenazador, navega en dirección contraria, hacia la página 85",
        toId: "85",
      },
    ],
  },
  "39": {
    id: "39",
    title: "Página 39",
    text: [
      "Una vez en Panamá, nuevamente es el capitán quien se encarga de sobornar a la autoridad portuaria —con tu dinero, claro—. Atravesáis el canal y ponéis rumbo al corazón del océano Pacífico.",
      "Los días de navegación transcurren y a Wilcox lo asaltan nuevas pesadillas. Todas ellas versan sobre lo mismo: el ser tentacular y alado al que diera forma en el bajorrelieve, el culto al dios Cthulhu, el sello de R’lyeh, el retorno de lo que él llama los «Primigenios», la venida de esos seres desde las estrellas hace eones…",
      "De repente, Wilcox despierta sobresaltado, y en esta ocasión un brillo demencial fulgura en sus pupilas dilatadas.",
      "—Será mejor que coja un arma, señor Thurston —dice.",
      "—¿Un arma? —preguntas—. ¿Para qué?",
      "Wilcox encoge los hombros.",
      "Casi todas las armas que hay en el barco están en el castillo de proa, pero os habéis quedado con una pistola y un mosquete en vuestro camarote. Coges la pistola, la ocultas bajo la mesa, verificas que está cargada… y justo en ese momento un sonido ensordecedor, proveniente desde cubierta, llama tu atención. Connolly se presenta en tu camarote armado con uno de los mosquetes.",
      "—Ya no queda mucho para llegar al destino, Thurston —espeta. Te apunta con el mosquete—. Ahora va a decirme qué es exactamente lo que buscamos en esa isla…",
      "Tienes la sensación de que no ha visto el arma que escondes bajo la mesa y de que quizá puedas dispararle sin que se dé cuenta, aunque eso alertaría al resto de la tripulación, organizando una carnicería. Tal vez sea mejor idea mantener la calma y dialogar… ¿O no?",
    ],
    choices: [
      {
        text: "Si decides dispararle a discreción y atenerte a las consecuencias, aprieta el gatillo en la página 28",
        toId: "28",
      },
      {
        text: "Si por el contrario entiendes que lo mejor es decirle una mentira para ganar tiempo y solucionar el problema una vez que estéis en la isla, ve a la página 97",
        toId: "97",
      },
    ],
  },
  "40": {
    id: "40",
    title: "Página 40",
    text: [
      "Crees que lo mejor es seguir ese resplandor purpúreo que, de alguna manera subconsciente, se te presenta como más seguro. Encaráis el sendero de la izquierda y muy pronto desembocáis en una costa bañada por el resplandor lunar.",
      "Es un espacio abierto y, a juzgar por el cielo tachonado de estrellas, es obvio que habéis dejado atrás las catacumbas que os han conducido hasta allí. Resulta curioso, pero a pesar de la atmósfera irreal —casi onírica—, el escenario os transmite una paz celestial, una sensación de calma que ninguno de vosotros había experimentado antes. En medio del cielo morado se yergue una luna lechosa, redonda y enorme, y más adelante se adivina una playa de arena blanca y guijarros.",
      "Descendéis por un sendero en medio de las cálidas dunas hasta la costa bañada por una espuma serena y por un oleaje de aguas casi remansadas. Un poco más allá, y cerca de un risco, adivináis una presencia humana. Se trata de un hombre que se prepara para subir a una pequeña embarcación. Lo hace con movimientos parsimoniosos. Está solo, pero no se le ve preocupado ni asustado. Intercambias una mirada con tus acompañantes y, de repente, todos sentís una sensación de paz que difícilmente podríais explicar.",
      "La presencia del hombre os tienta a acercaros y conocerlo, pero después de tantas desventuras es complicado fiarse. Tal vez lo mejor sea dejarle marchar y, después, intentar bogar esas aguas con alguno de los muchos otros botes que yacen varados en esta costa…",
    ],
    choices: [
      {
        text: "Si quieres acercarte y conocer la identidad del misterioso marinero, ve a la página 12",
        toId: "12",
      },
      {
        text: "Si prefieres dejarlo marchar e intentar navegar en uno de los botes, ve a la página 53",
        toId: "53",
      },
    ],
  },
  "41": {
    "id": "41",
    "title": "Página 41",
    "text": [
      "Se trata de un sacerdote de baja estatura, enjuto y algo consumido. Un gesto serio y reconcentrado gobierna su expresión taciturna. En un principio se muestra reticente a hablar del «Culto de Cthulhu», pero pronto le demuestras que posees abundante información sobre el tema. Es entonces cuando empieza a confiar en ti.",
      "—Parece haber llegado usted en el momento exacto, señor Thurston —dice—, ya que estamos nuevamente ante las puertas del Advenimiento.",
      "Tras estas palabras el cura levanta los ojos y observa con recelo la cruz de yeso que representa el martirio de Cristo. A pesar de tratarse de un sacerdote católico, su gesto de abierto desprecio hacia la figura revela su condición de renegado. Es obvio que no se refiere al advenimiento del Reino de los Cielos, sino a una creencia mucho más antigua y oscura. Una creencia que ha suplantado a su fe cristiana.",
      "—En 1925, cuando tuvo lugar la última aparición del Sacerdote Cthulhu —dice el padre Juárez—, nuestra comuna se encontraba enfrascada en el conflicto de la revolución Guna, cuando los indígenas gunas se rebelaron contra las autoridades panameñas. Fue en marzo cuando tuvieron lugar todas esas revelaciones en sueños. Desde entonces nuestra cofradía ha crecido exponencialmente, y ahora tenemos muchos más Receptores que antes.",
      "—¿Receptores?",
      "—¡Sí! —asiente con tono tétrico—. Gente sensible a la llamada telepática del Gran Cthulhu. Puede que le resulte interesante conocerlos en persona…"
    ],
    "choices": [
      {
        "text": "Conoce a los Receptores siguiendo al padre Juárez hasta la página 3",
        "toId": "3"
      }
    ]
  },
  "42": {
    "id": "42",
    "title": "Página 42",
    "text": [
      "Una cosa es considerar las leyendas respecto al Necronomicón como pura superchería, y otra muy distinta es pasar por alto las advertencias de un erudito como el profesor Armitage. Además, la sola visión del libro te resulta perturbadora.",
      "Abandonáis el salón de la biblioteca en donde se guarda el libro maldito y, ya en la cafetería de la universidad, te sinceras con Armitage. Le cuentas acerca del triste desenlace del profesor Angell y la investigación que desde entonces estás llevando a cabo. No dudas en mostrarle parte del contenido de la caja que has heredado de tu tío abuelo, incluidos los recortes de periódico y el manuscrito que llevas contigo a todas partes.",
      "El profesor Armitage, un hombre extremadamente analítico, piensa durante unos minutos y, finalmente, te brinda su consejo.",
      "—En estos papeles se habla de un tal inspector Legrasse, un policía de Nueva Orleans. Posiblemente logre usted recopilar bastante información por esta vía de investigación. Yo diría que en la experiencia del inspector en los pantanos está el origen de todo el misterio que le costó la vida al bueno de Gamell.",
      "—Existe también una cofradía de teósofos en California. Tal vez debería empezar por ahí.",
      "El profesor Armitage asiente pensativo mientras bebe un sorbo de café.",
      "—Quizá sea una buena alternativa también, amigo mío —dice—. En todo caso, es usted quien decide…"
    ],
    "choices": [
      {
        "text": "Si decides examinar a fondo el manuscrito del inspector Legrasse, ve a la página 51",
        "toId": "51"
      },
      {
        "text": "Si en cambio te parece mejor idea viajar a California para conocer a la comuna de teósofos, ve a la página 18",
        "toId": "18"
      },
      {
        "text": "Si quieres volver al contenido de la caja para examinar aquellos objetos que aún no has analizado, ve a la página 47",
        "toId": "47"
      }
    ]
  },
  "43": {
    "id": "43",
    "title": "Página 43",
    "text": [
      "El Edificio Fleur-de-Lys está casi del todo ocupado por los alumnos de la Escuela de Bellas Artes de Rhode Island. Entre ellos se encuentra Henry Anthony Wilcox, por quien preguntas en recepción.",
      "Te conducen a su habitación y, al abrirse un resquicio de la puerta, te encuentras con un joven que aparenta bastantes más años de los que indica su ficha académica. Es moreno, endeble, de aspecto descuidado, y tiene los ojos inyectados en sangre. El olor que emana de su habitación es indescriptible con palabras no despectivas. Al evidente desaliño y la falta de aseo personal de Wilcox hay que sumar una peste nauseabunda a arcilla remojada casi hasta la putrefacción.",
      "Lo primero que haces es mencionar tu parentesco con el profesor Angell. Wilcox abre mucho los ojos y parece asustado.",
      "—Pase usted, señor Thurston —dice—. Pase… y, por el amor de Dios, intente ayudarme como lo hizo su tío."
    ],
    "choices": [
      {
        "text": "Sigue a Wilcox hasta el interior de su habitación, en la página 44",
        "toId": "44"
      }
    ]
  },
  "44": {
    "id": "44",
    "title": "Página 44",
    "text": [
      "Cuando penetras en la habitación de Wilcox, te encuentras con una horripilante colección de objetos de culto, la mayoría de ellos esculpidos en arcilla, aunque también los hay en otros materiales como yeso, madera y algo parecido al barro de una charca. En todo caso, la línea temática de las esculturas es la misma: todo resulta un homenaje seudorreligioso a esa misma criatura cefalópoda, mitad dragón, mitad pulpo, que protagoniza el bajorrelieve del profesor Angell.",
      "Junto a la infinidad de pequeñas figuras representativas de esta misma criatura, se alzan grandes esculturas sembradas por todos los rincones, junto a la cama y ocupando el escritorio. Algunas alcanzan el metro de longitud. Por si esto fuera poco, las paredes y los techos de la habitación se encuentran completamente tatuados con las mismas inscripciones de ese idioma irreconocible que pulula en el bajorrelieve.",
      "Wilcox permanece en una esquina oscura, inmóvil, sin despegar sus ojos de ti.",
      "—Se acerca, señor Thurston —dice con voz apagada de demente—. Su advenimiento está próximo y esta es su forma de anunciarlo…",
      "Te estremeces ante tanta locura y te preguntas si no estás acercándote a terrenos de demencia de los que quizá más tarde te cueste escapar. Te preguntas si realmente ha sido una buena idea acercarte tanto a Wilcox…"
    ],
    "choices": [
      {
        "text": "Si decides permanecer en la habitación y someter a Wilcox a un interrogatorio, ve a la página 100",
        "toId": "100"
      },
      {
        "text": "Si prefieres huir de allí, temiendo que la locura de aquel muchacho sea peligrosa, ve a la página 35",
        "toId": "35"
      }
    ]
  },
  "45": {
    "id": "45",
    "title": "Página 45",
    "text": [
      "Tus ansias de conocimiento y el interés que te despierta Wilcox te llevan a seguir adelante con la investigación. Confías en que tu juventud no te haga tan vulnerable como lo fue el decrépito profesor Angell.",
      "Una vez que Wilcox despierta, te cercioras de que se encuentra tranquilo y coges el papel que tiene encima del pecho: «OP» puede significar cualquier cosa, pero el resto del galimatías son unas coordenadas: 47º 9’ de latitud Sur, 126º 43’ de longitud Oeste, tras una pequeña reflexión concluyes que corresponden a un punto en el ¡Océano Pacífico! «OP», claro. Tienes la localización exacta de la tumba acuática del dios pulpo, una isla de pesadilla a la que Willcox denomina R’lyeh.",
      "Una vez que el muchacho se calma del todo, comenzáis a fantasear acerca de fletar un barco y hacer un viaje en busca de la ciudad que ha visto en sueños.",
      "Pese a que en un principio se muestra reticente, finalmente termina convencido y empezáis a planearlo en serio.",
      "—Tal vez sea la única forma de sacarme ese islote de la mente —dice—. Aunque no estoy seguro de querer ver los horrores que alberga.",
      "Las palabras de Wilcox te resultan ominosas y amenazadoras, pero un principio racionalista te lleva a descartar todas estas supercherías. Está claro que algo extraño ocurre en relación a todo este culto, pero lo más probable es que esté relacionado con alguna tribu pagana o alguna otra comuna degenerada e incivilizada que habita aquel atolón en medio del Pacífico y con la que el joven se ha obsesionado.",
      "Sin duda habrá que ir con cuidado y contratar marineros rudos y armados, pero sientes que estás ante las puertas de un descubrimiento importantísimo, algo que puede encumbrarte como antropólogo."
    ],
    "choices": [
      {
        "text": "Comienza los preparativos para el viaje en la página 72",
        "toId": "72"
      }
    ]
  },
  "46": {
    "id": "46",
    "title": "Página 46",
    "text": [
      "Compras el Paisaje Onírico al precio estipulado. Los organizadores del Salón de Primavera respiran aliviados, como si se hubieran quitado de encima una oscura carga. Se despiden de ti mirándote con pena, y cierran la puerta de la galería corriendo las cortinas con rapidez.",
      "Te marchas de París y regresas a Marsella con tu tesoro debajo del brazo. Todavía no te animas a retirar el paño y a observar el cuadro; tal vez la agitación del viaje pueda contaminar el análisis detallado que te propones hacer de la obra. Necesitas sosiego y tranquilidad para examinarlo sin dejarte llevar por una primera impresión, y eso solo puedes conseguirlo en tu hogar.",
      "Sin embargo, durante la travesía de regreso, sientes que el cuadro te llama entre susurros por tu nombre y que difícilmente puedas resistir esa necesidad de observarlo. Tienes la tentación de descubrirlo una y otra vez y, de repente, te asalta una certeza innegable: ¡las imágenes plasmadas en el lienzo se están moviendo ahí debajo! No las has visto y nadie te lo ha dicho… pero lo sabes.",
      "Otras veces también te asalta la tentación de coger el cuadro y arrojarlo por la borda, para que de este modo se pierda para siempre en el fondo oceánico del Atlántico. ¿Pero de verdad has hecho un viaje semejante y te has gastado buena parte de tus ahorros en un simple cuadro para ahora, literalmente, arrojarlo todo por la borda?"
    ],
    "choices": [
      {
        "text": "Si resistes la tentación y retienes el Paisaje Onírico hasta el final de la travesía, sigue tu viaje hasta la página 21",
        "toId": "21"
      },
      {
        "text": "Si durante un arrebato arrojas el cuadro a las aguas del Atlántico, hazlo en la página 22",
        "toId": "22"
      }
    ]
  },
  "47": {
    "id": "47",
    "title": "Página 47",
    "text": [
      "El bajorrelieve de arcilla es tan interesante como demencial, pero las líneas de investigación que se desprenden de él te parecen demasiado peligrosas. Tanto la cercanía del demente Wilcox como la amenaza latente en las páginas del Necronomicon pueden brindarte alguna respuesta al enigma, pero quizá pagando un precio demasiado caro: tu vida, o quizá tu cordura.",
      "Crees que lo mejor es centrarse en los otros elementos que contiene la caja, o tal vez en visitar a profesionales cuerdos y competentes como el inspector Legrasse.",
      "De vuelta en el suntuoso estudio de tu residencia en Providence, te plantas ante la caja abierta…"
    ],
    "choices": [
      {
        "text": "Si aún no has examinado a fondo los recortes de periódico, hazlo en la página 56",
        "toId": "56"
      },
      {
        "text": "Si crees que lo realmente interesante es el manuscrito del profesor Angell y todavía no lo has leído, ve a la página 17",
        "toId": "17"
      },
      {
        "text": "Si ya lo examinado todo, quizá sea hora de hacer una visita al profesor Legrasse en Luisiana. En ese caso, ve a la página 86",
        "toId": "86"
      }
    ]
  },
  "48": {
    "id": "48",
    "title": "Página 48",
    "text": [
      "La isla es un cementerio de peces cuyos cadáveres parecen petrificados en las estribaciones de la quebrada a través de la cual ascendéis.",
      "Apenas habéis avanzado una milla cuando divisáis, a lo lejos, una especie de promontorio escarpado en cuya cima se eleva el objeto que lanza esos destellos verdosos. Todo indica que se trata de una estatua o monolito, un monumento pagano que alguna tribu de pescadores anteriores al hombre de Piltdown erigió en aquella cumbre.",
      "Ascendéis trabajosamente la empinada ladera y tras horas de esfuerzo os encontráis cara a cara con el monolito. Se trata de una efigie de dos metros y medio que representa a una horrenda criatura, una mezcla humano-pez-batracio de manos palmeadas, ojos saltones, gruesos labios de sapo y piel escamosa. Musculoso y de expresión malévola, el ídolo chorrea un limo verdoso que te sugiere un reciente surgimiento de ese atolón de tierra después de eones enteros de haber permanecido sumergido en los abismos oceánicos.",
      "Contemplas el ídolo, intrigado, hasta que una especie de cántico demente llama tu atención. La cima en la que os encontráis representa el punto más elevado de la isla, y tras el ídolo de piedra comienza un escarpado descenso hacia un templo ciclópeo de arquitectura imposible y formas escherianas. En ese preciso instante, los millares de peces en descomposición del camino que os ha llevado hasta allí empiezan a retorcerse y saltar como si estuvieran friéndose vivos en una sartén … El ruido de sus cuerpos gomosos al golpear contra la roca, mezclado con los cánticos impíos del templo más adelante, laceran tu cordura con el doloroso sufrimiento de la contemplación de lo imposible."
    ],
    "choices": [
      {
        "text": "Si quieres averiguar más sobre este culto ancestral, desciende la ladera y dirígete al templo en la página 83",
        "toId": "83"
      },
      {
        "text": "Si crees que este lugar de locura puede representar un riesgo para vuestras vidas, dad la vuelta y regresad al San Juan Bautista, en la página 94",
        "toId": "94"
      }
    ]
  },
  "49": {
    "id": "49",
    "title": "Página 49",
    "text": [
      "Todo indica que se trata de una estatua, un monumento pagano que alguna tribu erigió en aquella cumbre."
    ],
    "choices": []
  },
  "50": {
    "id": "50",
    "title": "Página 50",
    "text": [
      "Llegas al puerto de Nueva York tras una larga travesía. Y pese a que te has deshecho del siniestro Paisaje Onírico, tienes la sensación de que tu viaje a Europa no ha sido en vano. Trabar contacto con el suceso que tuvo lugar en aquel Salón de Primavera de hace dos años te ha permitido constatar lo peligroso de esta investigación para la salud mental de una persona cerrada de mente, y estás seguro de que seguirán abriéndose camino si te diriges a nuevos destinos. Nueva York es un enclave desde el que parten muchos barcos hacia diversas ciudades, y desde aquí tienes la opción de viajar a California y buscar a esa comuna de teósofos de la que hablan los recortes del profesor Angell. Otra opción es viajar, vía Mississippi, a Nueva Orleans, para entrevistarte con el inspector Legrasse… "
    ],
    "choices": [
      {
        "text": "Viaja a San Francisco —California— en busca de la comuna de teósofos, en la página 18",
        "toId": "18"
      },
      {
        "text": "O, si no lo has hecho ya, viaja a Nueva Orleans —Luisiana— en busca del inspector Legrasse, en la página 86",
        "toId": "86"
      }
    ]
  },
  "51": {
    "id": "51",
    "title": "Página 51",
    "text": [
      "Decides centrarte en el relato del inspector Legrasse, que resulta ser muy interesante. En él describe la forma en la que se apoderó de un ídolo de piedra que representa a una figura muy similar a la que se observa en el bajorrelieve de la caja. Por lo visto, la incautación del ídolo tuvo lugar durante una redada a un rito vudú en los pantanos de Nueva Orleans en noviembre de 1907. También habla de lo ocurrido en el Congreso de la Sociedad Americana de Arqueología de 1908, celebrado en Saint Louis. Al parecer, Legrasse llegó allí con el ídolo de piedra y, ante la estupefacción de los eruditos presentes, solo encontró respuesta a sus preguntas en el testimonio del profesor William Channing Webb, quien emparentó a la figura con el culto de una degenerada tribu de esquimales de Groenlandia.",
      "Una vez leído el informe, haces algunas averiguaciones y descubres no solo que Legrasse sigue con vida y ejerciendo de inspector en Nueva Orleans, sino que, en Inglaterra, el hijo del profesor Webb ha continuado con las investigaciones de su padre. Cabe entonces la posibilidad de entrevistarse con alguno de estos dos singulares participantes de la investigación de tu tío abuelo.",
      "¿Por quién de ellos empezarás?"
    ],
    "choices": [
      {
        "text": "Si decides visitar al inspector Legrasse en Nueva Orleans, ve la página 86",
        "toId": "86"
      },
      {
        "text": "Si prefieres viajar a Londres en busca del hijo del profesor Webb, ve a la página 78",
        "toId": "78"
      }
    ]
  },
  "52": {
    "id": "52",
    "title": "Página 52",
    "text": [
      "Estás en las costas de R’lyeh y, aunque te has salvado in extremis de morir aplastado bajo las garras de la criatura… ¿acaso el destino que te espera es mejor?",
      "Al ponerte de pie en la costa legamosa de R’lyeh, solo puedes contemplar en la distancia la furia de Cthulhu, que, tras destruir la embarcación, se ha lanzado a nadar por las aguas del Pacífico como si fuera una gigantesca bestia imparable. De pronto comprendes que estás solo y abandonado en R’lyeh, esa isla inhóspita que ha permanecido bajo la superficie acuática durante eones. Por supuesto, podrás explorarla en busca de sus impías maravillas, pero no parece que puedas sobrevivir mucho tiempo aquí solo y sin provisiones.",
      "Perplejo y desesperanzado, observas a la masa gelatinosa alejarse de la costa y adentrarse en el mundo, en nuestra civilización… Esa civilización que siempre creímos tan fuerte y sólida, pero a la que tú ya puedes imaginar destruida por la furia milenaria de este dios recién advenido.",
      "Abatido, te sientas sobre la arena pegajosa a ver morir a los cangrejos…",
      "¿Qué sucederá durante tu largo confinamiento en la perdida R’lyeh…?",
      "Esa será otra historia.",
      "FIN"
    ],
    "choices": []
  },
  "53": {
    "id": "53",
    "title": "Página 53",
    "text": [
      "Lo mejor es dejar que ese marinero desconocido se marche. Os ha mirado con ojos un poco turbios, como si no deseara vuestra compañía. No mucho después, fleta la pequeña embarcación y se aleja remando mar adentro. Dejáis pasar un buen rato, sentados sobre las dunas de la playa. Después de toda la locura que has vivido, estos momentos de calma os resultan casi balsámicos a todos. La luz de las estrellas ilumina este pequeño remanso de tranquilidad, donde solo se oye el romper espumoso de las olas. ¿Qué habrá sido de la criatura Cthulhu, que sin duda ha quedado libre?",
      "Una hora después de la partida del marinero desconocido, os ponéis en pie y os acercáis hasta uno de los botes. Por suerte, cuentas con la experiencia de Chávez y Salcedo para intentar surcar aquellas aguas ignotas que, esperas, puedan devolverte a la civilización.",
      "Os montáis en una de las barcas y la botáis al mar. Cada uno de vosotros coge un remo y empezáis a bogar.",
      "Os espera una larga travesía…"
    ],
    "choices": [
      {
        "text": "Continúa remando hasta la página 62",
        "toId": "62"
      }
    ]
  },
  "54": {
    "id": "54",
    "title": "Página 54",
    "text": [
      "La tentación de averiguar las costumbres de esos esquimales paganos vence tus temores sobre la posible locura del profesor Webb, así que te preparas para el viaje.",
      "Menos de una hora después, ambos estáis a bordo del trineo tirado por los perros. La pavorosa estatuilla de piedra viaja con vosotros, cosa que te crispa los nervios. La mirada de Webb parece perdida en la nada, obnubilada por un espeso velo de locura.",
      "El viaje resulta denso y accidentado. El terreno es gélido e inestable, y los perros, aunque entrenados, apenas pueden salvar los obstáculos que presenta el trayecto. En un momento dado, y presa de la desesperación, preguntas a Webb cómo no se le ocurrió contratar a un guía. Él te mira como si fueses tú el loco.",
      "—Nadie debe saber adónde nos dirigimos —espeta… Y tú te estremeces de pánico con la insinuación de que ahora estás completamente a su merced.",
      "Finalmente, y tras larguísimas horas de viaje a través de llanuras interminables de monótona blancura, llegáis a un poblado de iglús en mitad de la nada. Está anocheciendo y la densa oscuridad solo es rota por el resplandor de una colección de fuegos leprosos y fluctuantes.",
      "Descendéis del trineo a media milla del lugar donde se celebra el ritual.",
      "—Ahora debemos seguir a pie —dice Webb.",
      "Emprendéis el camino y, con progresivo temor, descubres que el profesor lleva en sus manos, y firmemente aferrada, la estatuilla del deforme dios Cthulhu…"
    ],
    "choices": [
      {
        "text": "Os acercáis al poblado esquimal en la página 98",
        "toId": "98"
      }
    ]
  },
  "55": {
    "id": "55",
    "title": "Página 55",
    "text": [
      "¡Tienes que salvarte! Lo lamentas mucho por el profesor Armitage, pero él mismo te ha ordenado que huyas y lo dejes allí.",
      "—¡AUXILIO! ¡POR EL AMOR DE DIOS!",
      "Encaras la puerta procurando ignorar sus chillidos a tus espaldas…, pero en el último momento te detienes.",
      "Vuelves a observar la desigual batalla que tiene lugar cerca del facistol con la espalda apoyada en la puerta. Lo que ves te paraliza totalmente…",
      "La bestia está absorbiendo la sangre del profesor Armitage mediante un cilio que le brota de la ¿cara? El ser lo aprisiona con garras invisibles y consume su esencia hasta que su forma física pierde consistencia, arrugándose como un trapo húmedo. La intensidad de sus gritos se desvanece conforme se acerca a la muerte.",
      "La criatura invisible se embebe de su sangre y al drenar el icor vital del profesor, va tornándose visible, aunque apenas sea distinguible como un contorno rojizo y difuso.",
      "Es un ser alado, de forma indefinida; una sucesión de pólipos y excrecencias indescriptibles que se agitan formando pequeños tentáculos sanguinolentos.",
      "Tras absorber toda la sangre del profesor surgen de su estructura unas protuberancias fluctuantes que en menos de un segundo despedazan los restos marchitos de Armitage. La explosión final, el colapso definitivo de su cuerpo, te hace proferir un grito de demencia. La habitación se llena de vísceras resecas y huesos mondos y destrozados.",
      "No mucho después las autoridades irrumpen en la habitación. No encuentran rastro de esa criatura que describes entre alaridos, pero sí el cadáver descuartizado del profesor Armitage y a un loco balbuceante que asegura que un vampiro de las estrellas se ha comido a su amigo."
    ],
    "choices": [
      {
        "text": "Es inevitable, y un alivio, que te conduzcan a la página 77",
        "toId": "77"
      }
    ]
  },
  "56": {
    "id": "56",
    "title": "Página 56",
    "text": [
      "Los recortes que ha compendiado tu tío abuelo son muy numerosos y, además, proceden de los lugares más remotos del mundo.",
      "Hay noticias sobre un hombre que se suicidó en Londres tras levantarse en plena noche y arrojarse a través de la ventana de su cuarto, al tiempo que profería un grito horroroso «¿FHTAGN?» Otro es un despacho proveniente de California, donde se relata que una colonia de teósofos se estaría preparando para cierto «glorioso acontecimiento» que está por venir. También hablan de una agitación sin precedentes en la India y de la multiplicación de orgías vudú en Haití. Se mencionan inquietantes actitudes en ciertas tribus de Filipinas, caimanes albinos en las alcantarillas de Nueva York y una noticia procedente de París, donde en el Salón de Primavera de la capital francesa un pintor llamado Ardois-Bonnot expuso algo llamado Paisaje Onírico de tan blasfema factura, que se ha tenido que suspender el evento.",
      "Todos los acontecimientos recopilados en los recortes tuvieron lugar entre primeros de marzo y primeros de abril de 1925.",
      "La clave para entender las investigaciones de tu tío podría estar en estos recortes. Si al final te decides a seguir los extraños portentos y señales que se plasman en ellos, es posible que tengas que visitar ciertos lugares y emprender algunos viajes… "
    ],
    "choices": [
      {
        "text": "Si consultas tu caja de caudales en busca del dinero necesario para emprender estos viajes, ve a la página 9",
        "toId": "9"
      },
      {
        "text": "Si aún no has analizado el extraño bajorrelieve de arcilla y te parece apropiado hacerlo ahora, ve a la página 32",
        "toId": "32"
      },
      {
        "text": "Si todavía no le has echado un vistazo al manuscrito que ha redactado el profesor Angell y quieres hacerlo, ve a la página 17",
        "toId": "17"
      }
    ]
  },
  "57": {
    "id": "57",
    "title": "Página 57",
    "text": [
      "Aunque el aspecto de los tripulantes es muy desagradable, accedéis a subir al barco. El capitán, un tipo con cara de pez y el cuello cubierto de llagas y escamas de piel tumefacta y brillosa, se presenta como capitán Marsh. Todos los miembros de la tripulación se parecen entre sí, y poco después el capitán te dice que pertenecen a la misma rama familiar. En el barco huele a pescado podrido, y la forma en la que esta gente habla os pone los pelos de punta.",
      "Al principio os sentís sumamente incómodos, pero conforme pasan los días y la travesía se desarrolla sin dificultades, os empezáis a sentir mejor.",
      "Al cuarto día de navegación, te contemplas en un pequeño espejo que pende del minúsculo cuarto de baño de la embarcación. No te sorprende ver que tienes los ojos un poco proyectados por fuera de las órbitas, y que la piel de tu rostro está empezando a escamarse. También te da la sensación de que tus labios han engordado. Chávez, Salcedo y el padre Juárez empiezan también a tener ese aspecto pisciforme. Por sorprendente que parezca, que la fisonomía de esta tripulación tan particular sea contagiosa, no te resulta asombroso en absoluto. De hecho lo asimilas con calma e incluso con demente alegría.",
      "Días después, ya eres un Profundo, uno más de ellos. Desde la proa vislumbras un minúsculo atolón de tierra en medio del mar, y no mucho más allá, un puerto.",
      "—¿Qué es eso? —preguntas al capitán Marsh, señalando el islote.",
      "—Se trata del Arrecife del Diablo, nuestro hogar natural —dice Marsh, y te sientes incluido en el posesivo «nuestro»—. Lo que ve más atrás es el pueblo de Innsmouth.",
      "No tienes idea de en qué te has convertido ni de lo que has de vivir tanto en el Arrecife del Diablo como en el desconocido pueblo de Innsmouth.",
      "Pero eso, por supuesto, forma parte de otra historia…",
      "FIN"
    ],
    "choices": []
  },
  "58": {
    "id": "58",
    "title": "Página 58",
    "text": [
      "El barco se aproxima a las costas de R’lyeh, y mientras contemplas sus playas sembradas de pináculos y minaretes, escuchas un forcejeo cerca de ti. Un bulto cae a tus pies y comienza a debatirse y agitarse.",
      "Es Wilcox, atado de pies y manos y amordazado.",
      "Connolly te observa con malicia.",
      "—Creo que aquí termina su viaje —dice. Un segundo después, cuatro fornidos marineros te sujetan por los brazos.",
      "—¡Teníamos un trato! —protestas mientras empiezas también a forcejear.",
      "Uno de los marineros te propina un brutal puñetazo. Wilcox y tú sois conducidos hasta la proa, desde donde observas las costas de R’lyeh. Los ángulos no euclidianos de su arquitectura te cautivan, incluso cuando sabes que te espera la muerte.",
      "—Lo siento, Thurston —dice Connolly—. Pero ¿por qué voy a conformarme con medio millón de dólares, si puedo tener un millón? ¡Ja, ja, ja, ja!",
      "Las risas demenciales del capitán encuentran un coro lunático en el resto de la tripulación.",
      "—Pero ¿cómo harán para encontrar el tesoro en la isla sin nosotros? —Preguntas en un intento desesperado por salvar tu vida.",
      "—¿Ha visto usted esa islita? —Dice Connolly sin dejar de reír—. Será pan comido para nosotros…",
      "Tus palabras se ahogan ante el fulgor ardiente de una violenta cuchillada que penetra en la zona de tus riñones. Gritas desesperado y notas que la sangre caliente empieza a manar de la herida. Alcanzas a ver cómo uno de aquellos brutos degüella limpiamente a Wilcox y arroja su cadáver al mar. Tu destino es similar: sangrante y moribundo, te empujan por la borda del Neptuno.",
      "Antes de hundirte del todo, tienes una última visión fugaz de R’lyeh, esa isla que nunca jamás llegarás a pisar.",
      "FIN"
    ],
    "choices": []
  },
  "59": {
    "id": "59",
    "title": "Página 59",
    "text": [
      "Poco antes de llegar al barco varado observáis que hay unos cuantos cuerpos mutilados y desmembrados en la arena de la costa. El espectáculo es verdaderamente dantesco conforme os acercáis al esqueleto despedazado de la embarcación. Ignoráis cuánta gente ha muerto en esta brutal carnicería o qué fue lo que la mató, pero hay miembros desperdigados y torsos colapsados, con las vísceras a la vista, por doquier. Lo más espeluznante de todo es que pese al intenso calor del pacífico, los cuerpos no han llegado a descomponerse, con lo cual entiendes que la masacre ha sido reciente. Otra cosa que os causa un pavor incontrolable es ver que los restos de miembros cercenados y cuerpos mutilados y sanguinolentos conducen desde el barco hasta el interior de la isla, más precisamente hasta la demencial y antisimétrica mampostería que conforma la ciudad cadáver de R’lyeh. ¿A qué clase de infierno habéis arribado tras la accidentada travesía? ¿Realmente tiene sentido que permanezcáis en esta isla sembrada de cadáveres humanos?",
      "—Quizá deberíamos averiguar lo que hay en lo alto de esa construcción —sugiere Wilcox, aunque no parece muy convencido—. O tal vez sea mejor largarnos cuanto antes…",
      "Apesadumbrado y asqueado por el monstruoso espectáculo que hay ante tus ojos, contemplas en la distancia el Neptuno, el barco que os ha llevado hasta allí, y a bordo del cual habéis demostrado auténtico valor. Estáis a las puertas de un misterio tan peligroso como fascinante y tal vez no sea el mejor momento para recular… ¿O puede que sí?"
    ],
    "choices": [
      {
        "text": "Si decides que ya has visto y experimentado suficientes monstruosidades, regresad al Neptuno e intentad conducirlo a las costas de América en la página 79",
        "toId": "79"
      },
      {
        "text": "Si por el contrario la aventura a bordo del Neptuno te ha armado de valor y quieres conocer el origen de la masacre que ha tenido lugar en R’lyeh, adéntrate hasta el corazón de la isla, en la página 106",
        "toId": "106"
      }
    ]
  },
  "60": {
    "id": "60",
    "title": "Página 60",
    "text": [
      "—Voy a enseñarle algo que no deberían contemplar ojos humanos… el Necronomicón, y solo en consideración a la amistad que me unía al profesor Angell. Pero créame que lo que mejor que puede hacer es olvidarse de este volumen prohibido y no seguir adelante. El acceso a su lectura está vetado en esta biblioteca, y solo debe acercarse a él alguien con mucha erudición, con mucha ecuanimidad en temas ocultistas. Su lectura puede provocar un daño irreversible a quien lo lea. Creo del todo necesario hacerle estas advertencias, señor Thurston. A partir de aquí, la responsabilidad de lo que le suceda será solo suya.",
      "La sombría seriedad del profesor Armitage te hace dudar. Has oído ya multitud de leyendas acerca del Necronomicón, pero nunca pensaste que un reputado académico como Armitage se las tomara en serio. Ahora no estás seguro de si lo que sientes es curiosidad por hojear sus páginas o terror por intuir en qué estaba metido tu tío abuelo. Asintiendo con la cabeza, le pides que te revele el conocimiento impío contenido en la mítica obra, madre de todas las blasfemias.",
      "El profesor Armitage te lleva a una habitación cerrada con llave. Entráis. Dentro hay un facistol elevado en cuya superficie se encuentra el libro maldito. Las palabras Kitab Al-Azif — Necronomicón están grabadas sobre la tapa, atravesada por una correa. Estás a punto de poner tus manos sobre el volumen con intención de abrirlo cuando el profesor Armitage coge tu mano.",
      "—Por última vez… ¿Está seguro de querer leer este libro?",
      "¿Realmente lo estás…?"
    ],
    "choices": [
      {
        "text": "Si estás convencido de querer leer el Necronomicón, hazlo en la página 65",
        "toId": "65"
      },
      {
        "text": "Si por el contrario las advertencias del profesor Armitage han hecho efecto en tu ánimo, aléjate del libro y ve a la página 42",
        "toId": "42"
      }
    ]
  },
  "61": {
    "id": "61",
    "title": "Página 61",
    "text": [
      "Voy a enseñarle algo que no deberían contemplar ojos humanos... el Necronomicón."
    ],
    "choices": []
  },
  "62": {
    "id": "62",
    "title": "Página 62",
    "text": [
      "Remáis y remáis durante una noche eterna y tan oscura como la cueva de la que salisteis, hasta que, por fin, el resplandor de la mañana asoma por el este. Estáis perdidos en medio del océano, sin duda en alguna coordenada del Pacífico que, sin brújula ni instrumento ninguno, sois incapaces de identificar. Unas cuantas horas después, y cuando la sed y la desesperación están empezando a minar vuestros ánimos, aparece en lontananza una embarcación. Salcedo se pone de pie en la proa del bote y empieza a sacudir los brazos como un poseso mientras lanza unos estridentes alaridos.",
      "No mucho después, la proa del barco enfila hacia vuestra posición. ¡Os han descubierto y vienen a rescataros! Intercambiáis miradas de alivio. ¡Estáis salvados!",
      "Una vez que el barco y su tripulación están al alcance de la vista, observáis que desde la cubierta os hacen señas para que reméis en dirección a la embarcación…, pero en ese momento os dais cuenta de que el aspecto de los tripulantes no es... normal. Sus rostros no son enteramente humanos, y aunque su configuración física es claramente antropomorfa, sus rostros están cubiertos de eccemas escamosos de un color verdoso y tienen los ojos saltones.",
      "—Suban, amigos —croan de forma repulsiva con su aliento a pescado podrido, perceptible incluso desde vuestra posición.",
      "¿Seréis capaces de compartir viaje con estos engendros…?"
    ],
    "choices": [
      {
        "text": "Si entiendes que subir a esa extraña embarcación es la única forma de salvaros, remad hasta ella en la página 57",
        "toId": "57"
      },
      {
        "text": "Si decides ignorar la llamada de aquellos horribles tripulantes y continuar navegando por vuestra cuenta, aléjate de la misteriosa embarcación hasta la página 24",
        "toId": "24"
      }
    ]
  },
  "63": {
    "id": "63",
    "title": "Página 63",
    "text": [
      "Estás seguro de que esa luz iridiscente y verdosa puede suponer una señal. Quizá no sea una manifestación de la cuidad de R’lyeh, pero al menos representa un faro al que dirigir la endeble proa del San Juan Bautista en estos momentos de desesperación.",
      "No transcurre mucho tiempo hasta que empieza a soplar una ligera brisa favorable que hincha las velas auxiliares del navío y os empuja fuera del impenetrable banco de niebla. No puedes estar seguro de si ha sido la suerte, o la prueba de que algo o alguien os está dirigiendo hacia un destino incierto.",
      "La aurora de luces australes de color esmeralda pronto refleja la silueta de un arrecife en medio del océano, inexistente en las cartografías. Los teósofos, convertidos en marineros aficionados, entran en un inexplicable éxtasis con la mera contemplación del siniestro contorno ciclópeo. Todo parece indicar que tenéis R’lyeh al alcance de la mano. El único que aún se muestra prudente es el padre Juárez.",
      "El San Juan Bautista llega hasta un brazo de tierra y con una sacudida que te zarandea violentamente, encalla en un lecho fangoso. Os rodea un terreno endeble e inestable sembrado de cadáveres de peces y otras criaturas marítimas que supones abisales, mucho más exóticas y cuya morfología no has contemplado en tu vida.",
      "Siendo conscientes de que el barco no podrá avanzar más, desembarcáis en la inconsistente y hedionda playa rumbo al interior de la isla."
    ],
    "choices": [
      {
        "text": "Adéntrate en esta tierra desconocida en la página 48",
        "toId": "48"
      }
    ]
  },
  "64": {
    "id": "64",
    "title": "Página 64",
    "text": [
      "…hasta que una tremenda vibración y un resquebrajamiento furibundo abre una enorme grieta en el suelo gélido.",
      "Del abismo surge una inconmensurable criatura gelatinosa cubierta de escarcha. No tardas en identificarla como una “pequeña” réplica del mismísimo dios cefalópodo: su cuerpo de dragón con tentáculos, sus alas rudimentarias y sus temibles garras que claman al cielo, por su recién adquirida libertad.",
      "Gritos de locura y éxtasis religioso salen de las bocas de los esquimales, pero a la vez, todo el mundo huye en desbandada. El pedestal desaparece engullido por la tierra helada y la figurilla de piedra es aplastada por la furia de la criatura. En ese momento, el ser profiere un rugido que sientes que hará estremecer al mundo.",
      "A medida que la cordura de tus compañeros se resquebraja, pierdes de vista al profesor Webb. Todo lo que te rodea es un caos de personas que huyen o mueren aplastadas por el extraordinario ser. Oyes gritos de pavor, ves a gente arañándose la cara hasta sangrar, arrancándose el cabello a jirones y ¡sacarse los ojos de las cuencas!",
      "Entonces el hielo se parte bajo tus pies… ¡caes!",
      "El agua congelada se clava en cada poro de tu cuerpo como púas ardientes, la corriente te arrastra hasta el negro abismo y no puedes evitar pensar que tal vez esta sea una muerte más dulce que la que puede proporcionarte el horripilante ser al que habéis liberado.",
      "A través del techo semitransparente de tu ataúd de hielo, alcanzas a vislumbrar cómo la criatura se aleja de esta ignota península, sin duda con intención de establecer su reinado sobre el hombre.",
      "Después, la reconfortante oscuridad helada del abismo te traga para siempre.",
      "FIN"
    ],
    "choices": []
  },
  "65": {
    "id": "65",
    "title": "Página 65",
    "text": [
      "Deslizas la correa y, pese a las advertencias del profesor Armitage, abres el Necronomicón. No tardas en sentirte cautivado por la oscura y siniestra magia que se desprende de sus páginas apergaminadas y crujientes. El libro contiene una escritura apretada y enloquecida y algunos dibujos hechos a carboncillo, sumamente obscenos y aberrantes, y cuya sola visión hace que tu cordura se tambalee.",
      "El profesor Armitage permanece a cierta distancia, pero se le nota alerta, dispuesto a intervenir a la menor muestra de debilidad por tu parte. El embrujo que el volumen prohibido ejerce sobre ti te hace perder la noción del peligro al que te expones.",
      "La versión que yace sobre el facistol es una copia del original que Olaus Wormius tradujo al latín en 1228. Gracias a tus conocimientos de este idioma, comienzas a traducir mentalmente y de forma inconsciente muchas de las sentencias, directamente emparentadas con la nigromancia y el culto a los muertos.",
      "Casi al final del libro, te topas con una oración que se graba en tu mente de una manera tan peculiar que no puedes evitar repetirla en voz alta:",
      "—Tibi, Magnum Innominandum, signa stellarum nigrarum et bufaniformis. Ph’nglui mglw’nafh Cthulhu gh’la gath’a’no toa pthm a ¡fhtagn!",
      "—¡NOOOOO! ¡¿Qué ha hecho, insensato?!",
      "¡El grito que el profesor Armitage profiere a tus espaldas te interrumpe!"
    ],
    "choices": [
      {
        "text": "Descubre la calamidad que has desatado en la página 81",
        "toId": "81"
      }
    ]
  },
  "66": {
    "id": "66",
    "title": "Página 66",
    "text": [
      "Tu cordura y tu prudencia se tambalean ante las demostraciones de éxtasis de estos mestizos fanáticos. Lo que sea que se halle tras esa puerta labrada, sin duda será lo más trascendental que hayas visto en tu vida.",
      "Salcedo se suelta de tu agarre dando un fuerte tirón y se lanza contra la puerta, pero no es el único. Varios de los místicos centroamericanos corretean sobre esa extraña superficie casi horizontal que ya empieza a inclinarse hacia abajo, como si se deslizara sobre unos goznes invisibles debido al peso de la multitud que irrumpe en el templo.",
      "Inmediatamente, de la profunda e inmemorial sima que se abre bajo la puerta, brota un hedor nauseabundo y una oscuridad casi material emerge en jirones tubulares que parecen olisquear el aire como los zarcillos sensitivos de un molusco.",
      "Entonces, y antes de que nadie tenga oportunidad de proferir siquiera una mínima exclamación, desde el fondo de la oquedad se alza el ser monstruoso al que habéis venido a perturbar en su sueño milenario…"
    ],
    "choices": [
      {
        "text": "Descúbrelo en la página 73",
        "toId": "73"
      }
    ]
  },
  "67": {
    "id": "67",
    "title": "Página 67",
    "text": [
      "—Hace un par de años, cuando todo este asunto eclosionó —dice Legrasse—, tuve oportunidad de conocer a un tipo llamado Johansen. Gustaf Johansen. Se trataba de un marinero noruego que, casi sin quererlo, fue a parar a esa maldita isla… R’lyeh. Yo seguía buscando información acerca del «Culto de Cthulhu». Tenga en cuenta que, tras la redada en los pantanos, y después de haber confiscado cierta estatuilla, el asunto casi llegó a obsesionarme. Pues bien: tuve noticias de ese tal Johansen al leer sobre la llegada de un buque, el Vigilant, que traía remolcado a otro barco, el Alert, originario del puerto de Dunedin. ¿Sabe una cosa, señor Thurston? Creo que lo que ese hombre puede contarle es mucho más interesante que lo que pueda averiguar en nuestro país. Aquí hemos desbaratado numerosas cofradías de oficiantes de ritos vudú —ya sabe cómo es la gente del Sur—, pero no se ha vuelto a tener indicios del «Culto de Cthulhu» en Nueva Orleans.",
      "Miras al comisario con una expresión que él interpreta como interrogativa, y casi enseguida continua con su monólogo:",
      "—Créame, viajé a Oslo y localicé a Johansen. Cuando me entrevisté con él, estaba redactando su historia en un manuscrito. Le recomiendo que vaya a verle. Le aseguro que lo que ese pobre hombre vio, arrojará mucha más luz sobre este misterio. En esta zona ya no encontrará nada más.",
      "Dicho esto, Legrasse se pone de pie y te estrecha la mano. Casi a trompicones sales de su despacho, un tanto desconcertado…, pero con un papel en el que consta la dirección del tal Johansen en Oslo."
    ],
    "choices": [
      {
        "text": "Si decides viajar a Noruega y entrevistarte con Johansen, hazlo en la página 89",
        "toId": "89"
      },
      {
        "text": "Si crees que nada encontrarás allí —más que el relato de un lunático— y aún no has visitado al hijo del profesor Webb en Londres, ve a la página 78",
        "toId": "78"
      }
    ]
  },
  "68": {
    "id": "68",
    "title": "Página 68",
    "text": [
      "Pese al canto sacrílego que ejecutan delante de esa columna de fuego, por alguna razón decides que esos hombres encapuchados son de fiar. Avanzáis en silencio, como si algo os impulsara a no querer interrumpir el oscuro rito que practican los oficiantes. A medida que os acercáis a la pira y aumenta la luz, os dais cuenta de que se trata de una verdadera multitud. Hay allí no menos de cien encapuchados. No parecen ser muy altos, y todos ellos visten una agreste túnica de arpillera con capucha.",
      "Te faltan unos metros para llegar hasta ellos cuando el cántico se interrumpe repentinamente. El inesperado silencio detiene vuestros pasos… Justo en ese momento uno de los sacerdotes se da la vuelta, aparta la caperuza de su cabeza y voltea su rostro deforme y carcomido ante vuestros ojos atónitos…"
    ],
    "choices": [
      {
        "text": "Ve a la página 70",
        "toId": "70"
      }
    ]
  },
  "69": {
    "id": "69",
    "title": "Página 69",
    "text": [
      "En el Edificio Fleur-de-Lys te informan de que Henry Wilcox ya no se aloja allí. Sus constantes delirios y los gritos espantosos que profería por las noches perturbaban al resto de los estudiantes que se hospedan en la residencia. El encargado te facilita la dirección de sus padres en Waterman Street, y hacia allí te diriges.",
      "Sus padres te hacen pasar y se muestran muy amables contigo, sobre todo al conocer tu parentesco con el profesor Angell. Te informan de que Henry ha vuelto a sufrir otra de sus agudas crisis nerviosas y que ha sido ingresado en una casa de reposo. Su padre, un hombre de aspecto triste y taciturno, te facilita la dirección.",
      "Enseguida ves que se trata del infausto Manicomio de Arkham, y que el término «casa de reposo» es tan solo un eufemismo para encubrir que su hijo se encuentra recluido en una prisión para dementes peligrosos.",
      "Agradeces su amabilidad a los padres de Henry, deseándole una pronta recuperación a su hijo, y te preguntas qué hacer a continuación."
    ],
    "choices": [
      {
        "text": "Si decides hacer una visita a Henry en el manicomio, ve a la página 36",
        "toId": "36"
      },
      {
        "text": "Si los rumores tenebrosos que corren acerca de las prácticas que se llevan a cabo en el Manicomio de Arkham te despiertan malas vibraciones, investiga alguno de los otros objetos de la caja en la página 101",
        "toId": "101"
      }
    ]
  },
  "70": {
    "id": "70",
    "title": "Página 70",
    "text": [
      "Tras la protección de la caperuza descubres que el oficiante esconde el rostro más repulsivo que has visto en tu vida: su cara es un rejunte amorfo de tejido carcomido por algún tipo de enfermedad necrosante y degenerativa, y está repleta de pústulas supurantes y costras malolientes. Los ojos son dos esferas lechosas que emiten un brillo hambriento y lunático, pero lo peor de todo es, sin duda, su maniática sonrisa.",
      "El clérigo maligno repliega sus labios en una macabra expresión, en la que se deja ver una hilera de dientes puntiagudos y en cuyas amenazadoras aristas se adivinan, aun a la luz tenue de la llamarada, lo que parecen restos de carne cruda… despojos de un banquete anterior.",
      "Antes de que os dé tiempo a reaccionar, unos cuantos más de estos oficiantes se dan la vuelta y se arrancan las capuchas. Ante vuestros ojos aparecen más rostros carcomidos y deformes, más ojos lechosos cuya mirada habla de un apetito insaciable, más sonrisas escalofriantes preñadas de dientes como púas. A tu alrededor notas cómo tus compañeros se dan la vuelta intentando huir, pero la multitud encapuchada os rodea completamente.",
      "El absurdo consuelo que encuentras antes de perecer víctima de las agudas y feroces dentelladas de esta raza subterránea de seres antropófagos, es: ¿cómo harán para repartirse la carne de solo cuatro cuerpos entre los cientos de caníbales que moran en estas catacumbas?",
      "FIN"
    ],
    "choices": []
  },
  "71": {
    "id": "71",
    "title": "Página 71",
    "text": [
      "Tras la la caperuza descubres el rostro más repulsivo que has visto en tu vida."
    ],
    "choices": []
  },
  "72": {
    "id": "72",
    "title": "Página 72",
    "text": [
      "A través de tus contactos consigues alquilar el Neptuno, un barco clandestino, y a toda su tripulación, en el mercado negro de Boston. Quizá no sea la opción más segura, pero tus ahorros no te dan para organizar una expedición oficial, y ningún organismo público financiaría semejante viaje, sobre todo si supieran las premisas investigativas tan endebles que te empujan a él. La tripulación está compuesta por unos sujetos mal encarados y pedestres, casi todos ellos descendientes de irlandeses, o, aún peor, ¡españoles! Cuando te reúnes con ellos en una de las tabernas cercanas al muelle, observas que sus actitudes son pendencieras y de una bravuconería intolerable, y que además están casi todo el tiempo borrachos. Esta plantilla de bucaneros es muy probable que te traiga dificultades, pero al mismo tiempo piensas que su rudeza y violencia innata quizá te venga bien a la hora de viajar a R’lyeh, toda vez que esa isla también puede estar habitada por seres hostiles y agresivos, y en ese caso sería imprescindible contar con su protección.",
      "Como sea, todavía estás a tiempo de abortar la expedición.",
      "El jefe de la cuadrilla de marineros, un rudo irlandés llamado Connolly, estira su mano nudosa y velluda por encima de la mesa de la taberna. Ya te ha expuesto sus condiciones, una pequeña fortuna, y solo está esperando a que se la estreches pare cerrar el trato. ¿Lo harás?"
    ],
    "choices": [
      {
        "text": "Si estrechas la mano de Connolly y sellas el acuerdo, continúa preparando la expedición en la página 30",
        "toId": "30"
      },
      {
        "text": "Si crees que puedes tener una mala experiencia con semejante plantilla de marineros, puedes echarte para atrás y seguir la investigación por otro lado, en la página 101",
        "toId": "101"
      },
      {
        "text": "Si todo el asunto te produce una angustia insoportable, abandona la investigación en la página 11",
        "toId": "11"
      }
    ]
  },
  "73": {
    "id": "73",
    "title": "Página 73",
    "text": [
      "La puerta se desliza y unos cuantos marineros caen sin remedio en la negrura absoluta de un abismo sin fondo.",
      "Sus gritos aterradores se pierden en la oscuridad infernal de la grieta, al tiempo que el espacio comienza a poblarse de una masa gelatinosa y maleable de pólipos que, en cuestión de segundos, da forma a la criatura monstruosa que gobierna R’lyeh. ¡Es el Gran Cthulhu, que, tras su hibernación de eones, ha regresado para reclamar lo que fue y será suyo!",
      "El hedor que emana de la grieta es el de una legión de osarios abiertos al mismo tiempo. El ser, que poco a poco se materializa en una realidad que se retuerce de espanto ante su antinatural presencia, es una auténtica montaña de musculatura amorfa y tentáculos de más de seis millas.",
      "Por fin, bate sus alas rudimentarias y la fuerza del vendaval que desata aniquila de un plumazo a docenas de los extasiados místicos que lo contemplan.",
      "Con tu cordura a punto de fragmentarse en añicos apenas vislumbras el surgimiento de la bestia. Horrorizado, asistes a cómo muchos de los místicos se están arrojando voluntariamente al fondo del abismo en donde, hasta hace poco, descansaba la criatura. ¿Qué es lo que se proponen saltando ahí dentro?",
      "Estás intentando responder a esta pregunta cuando sientes una mano helada posarse en tu hombro. Es el padre Juárez…"
    ],
    "choices": [
      {
        "text": "Averigua lo que quiere decirte en la página 74",
        "toId": "74"
      }
    ]
  },
  "74": {
    "id": "74",
    "title": "Página 74",
    "text": [
      "—¡Venga con nosotros! —propone el desquiciado padre Juárez—. El destino le ha llevado hasta aquí. No renuncie a su oportunidad de alabar al amo…",
      "Oyes su demencial propuesta mientras observas la fluctuante e hipnótica danza que ejecutan los tentáculos faciales de la bestia, de cuya “boca” salen despedidas babas ponzoñosas, al tiempo que profiere un ulular estremecedor.",
      "Algunos marineros yacen sobre la puerta inclinada, seguramente muertos de miedo, mientras que otros, han sido aplastados por las descomunales zarpas de la criatura y son ahora una pulpa rojiza de carne y órganos colapsados. El resto, como lunáticos sin remedio, se arrojan implorantes, a los pies de su nuevo amo.",
      "—Está loco… —murmuras.",
      "—Es su última oportunidad —dice el padre Juárez justo antes de alejarse de ti y arrojarse de cabeza al fondo del abismo.",
      "Corres tras él al escuchar sus gritos dementes y echas un vistazo: En esa negrura absoluta solo intuyes la muerte, o quizá algo peor…, pero también sabes que será casi imposible remontar la trampa en la que se ha convertido el umbral inclinado del templo.",
      "Tienes que decidirte ya, pues el gran Cthulhu se lanza sobre ti…"
    ],
    "choices": [
      {
        "text": "Si decides arrojarte de cabeza al abismo, hazlo en la página 110",
        "toId": "110"
      },
      {
        "text": "Si entiendes que precipitarte allí abajo es la forma más efectiva de morir de forma estúpida, intenta escapar de la criatura en la página 25",
        "toId": "25"
      }
    ]
  },
  "75": {
    "id": "75",
    "title": "Página 75",
    "text": [
      "Cualquier llamamiento a la cordura resulta inútil con estos místicos enfebrecidos. Aunque intentas convencerlos de que no estáis preparados para forzar la puerta de la cripta, ellos están decididos a hacerlo con o sin tu ayuda. Como él último oasis de cordura en este grupo de fanáticos, la morada de Cthulhu te resulta demasiado ominosa y no estás dispuesto a seguir su estela de suicidas. No te prestan atención cuando te das la vuelta y comienzas el descenso —¿o es un trayecto horizontal? ¿…o diagonal? —. Tras un tiempo que no puedes determinar, alcanzas a ver en la lejanía el lecho fangoso donde habíais atracado.",
      "Los ángulos extrañísimos y antigeométricos de las pendientes de roca confunden tus sentidos hasta el punto en el que crees, durante un segundo, que vuelves a acercarte hasta la puerta en lugar de alejarte.",
      "Corres, te resbalas, gritas de desesperación y por fin, cuando ya crees que vas a quedar atrapado para siempre en la telaraña de locura de R’lyeh… ¡el suelo desaparece bajo tus pies!",
      "Te precipitas un par de metros y caes en medio de un charco gelatinoso, a cuatro pasos de la embarcación. Asombrado por tu buena suerte, corres por la pasarela hasta la cubierta del barco.",
      "Desde tu posición observas cómo el grupo de teósofos intenta manipular la enorme puerta para tratar de llegar hasta la criatura que mora en el interior del templo.",
      "Te sientes relativamente seguro gracias a esta distancia que has establecido. Un segundo después, se produce un ligero temblor de tierra y ya no estás tan convencido…"
    ],
    "choices": [
      {
        "text": "Averigua el origen de este breve terremoto en la página 84",
        "toId": "84"
      }
    ]
  },
  "76": {
    "id": "76",
    "title": "Página 76",
    "text": [
      "Vuestro objetivo es desembarcar en Nuussuaq, una península ubicada en la costa oeste de Groenlandia, en donde, según los informes póstumos de Webb padre, reside esa colonia de esquimales apóstatas. A juzgar por las coordenadas, no estás lejos del famoso Paso del Noroeste, donde tuvo lugar la tragedia de la Expedición Franklin en 1847. Los marineros conducen el barco con suma cautela, evitando los traicioneros icebergs que asoman aquí y allá.",
      "Finalmente, tras una larga travesía, llegáis a Nuussuaq.",
      "El profesor Webb está visiblemente excitado y no se despega del ídolo de piedra. Se diría que a lo largo del viaje ha despertado en él una especie de fiebre religiosa hacia el objeto, cosa que te preocupa un poco. No obstante, sigues mostrándote amable con él.",
      "Al desembarcar, la gente del pueblo resulta hosca y extraña, sumamente apagada e infeliz. Aunque puede que sea debido a las inclemencias del tiempo y a las condiciones de vida en un sitio tan aislado y casi sin recursos.",
      "Alquiláis una habitación en una hostería del puerto y os ofrecen pescado para cenar, mucho más abundante del que sospechabais.",
      "Al amanecer del día siguiente, deberéis emprender la expedición hacia el interior de la isla, donde esperáis encontrar a los últimos adoradores de Cthulhu."
    ],
    "choices": [
      {
        "text": "Prepárate para la expedición final en la página 87",
        "toId": "87"
      }
    ]
  },
  "77": {
    "id": "77",
    "title": "Página 77",
    "text": [
      "Al despertar, estás encerrado en una habitación de paredes blancas y tienes los brazos aprisionados por la acción de una camisa de mangas desproporcionadas, firmemente amarradas a tu espalda. Te encuentras aturdido y confuso por las medicinas, pero con la vaga sensación de haber contemplado un abismo de locura total.",
      "Recibes visitas periódicas de médicos y enfermeros que te hacen preguntas, buscando la forma de entender cómo funciona tu psique despedazada. Tus respuestas son monotemáticas y se repiten en un ciclo eterno: el «Culto de Cthulhu», los Dioses Primigenios, la sumergida ciudad de R’lyeh, y un blasfemo e impronunciable salmo que ninguno de los seres cuerdos que te visita es capaz de enunciar sin acabar siendo tu compañero de celda: Ph’nglui mglw’nafh Cthulhu R’lyeh wgah’nagl fhtagn.",
      "Por desgracia, parece que pasarás el resto de tu vida entre estos muros acolchados, y aunque imploras ayuda a gritos, por las noches, invariablemente, acude a ti en sueños la figura de un enorme dragón con cabeza de calamar y alas rudimentarias para susurrarte secretos blasfemos.",
      "Lo siento, pero ningún tratamiento será capaz de acallar tus gritos desesperados.",
      "FIN"
    ],
    "choices": []
  },
  "78": {
    "id": "78",
    "title": "Página 78",
    "text": [
      "Sin duda, el hijo del profesor Webb puede ser la clave de todo el asunto. Si su padre conoció de primera mano numerosos detalles acerca del «Culto de Cthulhu», lo más normal es que su hijo conserve buena parte de los documentos que formaron parte de su investigación. Decidido a dar con él, viajas a Londres sumamente esperanzado con esta perspectiva."
    ],
    "choices": [
      {
        "text": "Busca al hijo del profesor Webb en Londres… y en la página 6",
        "toId": "6"
      }
    ]
  },
  "79": {
    "id": "79",
    "title": "Página 79",
    "text": [
      "Lo que habéis visto ha aniquilado el valor del que os habíais armado tras el tiroteo en el Neptuno. Quizá no estáis hechos para semejantes aventuras, y aunque Wilcox parece dispuesto a adentrarse en el corazón de la ciudad de R’lyeh, lo convences de que lo mejor es regresar. Dejando atrás los cadáveres despedazados que siembran toda la costa, volvéis a subir al barco. Antes de zarpar, no obstante, arrojáis los cuerpos de los bucaneros sobre la arena de la playa. Allí quizá sirvan de alimento a las aves de rapiña… o a lo que quiera que fuese lo que aniquiló a la tripulación del otro barco.",
      "Wilcox y tú no tenéis demasiada experiencia en navegación, pero no os queda otro remedio que intentar llegar hasta América.",
      "Poco después de partir, sin embargo, observas que la cordura del chico se va despedazando, hora tras hora. Solo balbucea y emite unos sonidos muy alejados de cualquier lenguaje humano…, las mismas murmuraciones que le has oído pronunciar en sueños.",
      "Al cuarto día de travesía, y mientras te hallas ante la rueda del timón, oyes a tus espaldas el sonido inconfundible de un chapuzón. Ni siquiera te das la vuelta para verificar aquello que ya sabes perfectamente. De hecho, esperabas la inevitable muerte de Wilcox desde hacía tiempo.",
      "Sigues navegando por tu cuenta, aferrándote a tu supervivencia y a tu cordura, y sabiendo que, aunque hayas presenciado cosas que nunca podrás contar a nadie, todavía tienes una oportunidad de salir indemne de semejante aventura.",
      "Finalmente, y tras no sabes cuántos días de angustiosa travesía sin rumbo, un barco en el horizonte se acerca. ¡Es la salvación!"
    ],
    "choices": [
      {
        "text": "Experimenta el alivio de tu rescate en la página 111",
        "toId": "111"
      }
    ]
  },
  "80": {
    "id": "80",
    "title": "Página 80",
    "text": [
      "¡Cthulhu emerge de la superficie! Lo hace a un buen trecho de vuestra posición, pero su tamaño es tan descomunal que sentís que lo tenéis justo frente a vosotros. La criatura sale desde el fondo marino a poca distancia de la costa y levanta una inmensa ola que destruye los restos del barco abandonado. Un vendaval de agua baña casi toda la isla, incluidos vosotros, que os encontráis al borde del negro abismo que le sirvió de sepultura. Cthulhu se eleva cada vez más, hasta alcanzar el tamaño de una montaña. Es enorme, gelatinoso, con forma ligeramente humana, pero más parecido a un dragón mitológico. Expande sus alas al tiempo que rielan los múltiples tentáculos que cubren su rostro abotargado. Sus ojos color carmesí echan chispas de furia. Con una de sus zarpas destruye el Neptuno de un solo manotazo.",
      "Entonces la criatura repara en vuestra presencia, justo a las puertas de su morada. Os observa desde la distancia y avanza hasta vuestra posición. En ese momento Wilcox, en el borde mismo de la demencia, lanza un grito de locura absoluta y cae agitando brazos y piernas al negro agujero del abismo. No tienes claro si ha saltado por voluntad propia o ha resbalado en el último momento, presa del pánico. Tú mismo pierdes el equilibrio y te balanceas dramáticamente a un lado y a otro… ¡Vas a caer, vas a caer en la densa oscuridad…! Y en el último segundo te deslizas hacia delante y te precipitas por la pendiente, dirigiéndote entre trompicones hasta la costa.",
      "Rebotas despatarrado entre los cadáveres despedazados y la vegetación, ¡Cthulhu viene a por ti!… Pero la verdad es que eres demasiado insignificante para la criatura, sin reparar en tu miserable presencia, da la vuelta y se zambulle en las aguas del Pacífico, levantando otro tsunami a sus espaldas. Desde la distancia lo observas avanzar entre las olas, con la cabeza por fuera, alejándose de sus dominios… En busca de otros nuevos."
    ],
    "choices": [
      {
        "text": "Observa cómo Cthulhu se aleja para siempre de R’lyeh en la página 52",
        "toId": "52"
      }
    ]
  },
  "81": {
    "id": "81",
    "title": "Página 81",
    "text": [
      "¡Has pronunciado un salmo maldito de invocación! No era tu intención, desde luego, pero ya te habían advertido que el Necronomicón tiene sus propias reglas y puede engañar incluso al lector más precavido. De alguna manera el influjo del libro ha guiado tus ojos hacia determinadas frases y palabras en concreto y algo te ha impulsado a pronunciarlas en voz alta.",
      "Armitage se arroja sobre ti. Te aparta del facistol de un empellón y cierra el libro, profiriendo gritos desesperados. La habitación de pronto se torna gélida…, de un frío antinatural. Un viento incontrolable hace volar los papeles que hay sobre el escritorio. El suelo tiembla bajo tus pies, arrancando los libros de las estanterías.",
      "Armitage cae al suelo de bruces. Ves que le sangra la nariz a chorros y te observa con pavor. A su espalda una especie de formación gaseosa está empezando a cobrar consistencia cerca del techo. No tiene una silueta definida, es más bien una especie de energía pulsátil. No puedes verla, pero sabes que está ahí, y Armitage también lo sabe.",
      "El pobre hombre se lleva las manos a la cabeza buscando la forma de protegerse de algún tipo de bestia invisible que un segundo después cae sobre su cuerpo yacente.",
      "Pronto una explosión rojiza y sanguinolenta tiene lugar en medio de la disputa entre Armitage y la criatura, y se oye un sonido seseante, sin duda proferido por ese extraño ser.",
      "Estás paralizado, pero en el último momento escuchas un grito desesperado del profesor Armitage, que lucha denodadamente con la criatura.",
      "—¡Huya! ¡Huya ahora que está a tiempo!",
      "Te das la vuelta rumbo a la puerta, pero te detienes en el último momento, sin saber qué hacer…"
    ],
    "choices": [
      {
        "text": "Si decides salvar tu vida como sea, ve a la página 55",
        "toId": "55"
      },
      {
        "text": "Si crees que es tu deber ayudar al profesor Armitage, hazlo en la página 105",
        "toId": "105"
      }
    ]
  },
  "82": {
    "id": "82",
    "title": "Página 82",
    "text": [
      "Poneis rumbo a esa especie de pirámide maya que se alza en el fondo del valle umbrío."
    ],
    "choices": []
  },
  
  "83": {
    "id": "83",
    "title": "Página 83",
    "text": [
      "Dispuestos a llegar hasta el final del misterio, los tripulantes del San Juan Bautista y tú descendéis la otra cara de la cima, rumbo a esa especie de pirámide maya que se alza en el fondo del valle umbrío.",
      "El camino de bajada, al igual que el de subida, está sembrado de cadáveres de peces, conchas partidas, crustáceos y pequeños mamíferos acuáticos despedazados. Algunas formas esqueléticas resultan tan exóticas que, por fuerza, pensáis que han de pertenecer a eras geológicas infinitamente más antiguas que el hombre. Entre los restos fosilizados crece una tupida vegetación “algácea” que, en lugar de participar del proceso normal de fotosíntesis, emana una pestilencia marítima nauseabunda, un hedor a agua estancada que hace que tú y muchos de los otros marineros padezcáis unas náuseas incontenibles.",
      "—¡Vamos, vamos! —grita el padre Juárez, presa de un éxtasis religioso que intuyes ya incurable.",
      "Los gritos y cánticos demenciales han ido creciendo en intensidad a medida que os acercabais y ahora, cuando estáis a cuatro pasos de la negra abertura rectangular que da acceso al interior, la blasfema letanía llega a su punto máximo. El lenguaje del cántico es ininteligible, pero con las palabras se mezcla un obtuso y repugnante balbuceo. Las paredes del templo son, al igual que el ídolo de la cima, resbaladizas, jabonosas, y exudan una sustancia seminal de millones de años de antigüedad.",
      "El padre Juárez se detiene delante de soportal, pero solamente para dar una última indicación.",
      "—¡Vamos! —repite. El mismo éxtasis hipnótico te ha llevado a ti mismo hacia allí, y aunque en el último momento te arrepientes, la horda de místicos enceguecidos te empuja al interior del templo…"
    ],
    "choices": [
      {
        "text": "Descubre lo que se esconde entre las paredes del santuario en la página 108",
        "toId": "108"
      }
    ]
  },
  "84": {
    "id": "84",
    "title": "Página 84",
    "text": [
      "Permaneces en el barco y, mientras el resto de la tripulación se lanza a descubrir la morada de Cthulhu, toda la isla sufre una sacudida sísmica que se prolonga durante unos escasos dos o tres segundos. Solo puedes aferrarte a uno de los mástiles de la embarcación para no perder pie, y justo en ese momento, la enorme puerta inclinada que constituye el sello bajo el que descansa el supuesto dios Cthulhu, comienza a deslizarse diagonalmente…, o tal vez de forma horizontal. No puedes estar seguro, ya que la perspectiva está distorsionada debido a la geometría imposible que reina en este mundo de pesadilla.",
      "Algo va a pasar… Algo trascendental.",
      "Guiado por tu instinto de supervivencia, te lanzas a girar la manivela que eleva el ancla. Los gritos de los místicos resuenan en la distancia, para cesar de golpe cuando la oscuridad casi material que se corporiza a través de la grieta que se acaba de abrir, los envuelve. Es una negrura absoluta que mana en oleadas físicas.",
      "Pero lo peor está por venir…",
      "Sigues girando la manivela del ancla con desesperación, y te parece que está unida a una cadena inagotable."
    ],
    "choices": [
      {
        "text": "Continúa elevando el ancla y huye a toda prisa en la página 26",
        "toId": "26"
      }
    ]
  },
  "85": {
    "id": "85",
    "title": "Página 85",
    "text": [
      "Lo mejor es evitar aquel extraño resplandor y seguir en dirección contraria. Quizá más adelante, si el viento os ayuda, podáis encontrar tierra, o tal vez algún otro barco que os pueda orientar.",
      "El piloto vira el timón, y no ha terminado de hacerlo cuando una fuerte brisa empieza a hinchar las velas del San Juan Bautista. El padre Juárez, apoyado sobre la barandilla de popa, observa nostálgico el verdoso resplandor que palpita tras el banco de niebla.",
      "—Créame —le dices, apoyando una mano en su hombro—. Es mejor así.",
      "Ahora seguís surcando las aguas, lejos ya de esa amenaza… pero con rumbo desconocido.",
      "Tras un periodo de navegación indeterminado, por fin avistáis tierra. Según tus cálculos, bien puede tratarse de la isla Mangareva, una de las Islas Gambier, que el explorador James Wilson bautizó como Peard en 1797.",
      "De repente, unos inesperados gritos porvenientes del castillo de proa te distraen de la bucólica contemplación del islote.",
      "Algunos de los místicos están siendo presa de oscuras y delirantes pesadillas. Te acercas al castillo de proa y observas el demencial estado de los durmientes. En su sueño, se agitan y se retuercen, al tiempo que lanzan espumarajos por la boca. Los pocos que permanecen despiertos es evidente que también han entrado en un estado de éxtasis total, rezando unas plegarias que erizan los vellos de tu nuca.",
      "Regresas a cubierta aturdido, para informar al padre Juárez, pero te lo encuentras encaramado muy cerca del mascarón de proa, estirando las manos hacia el horizonte, casi queriendo tocar la isla que se alza en la distancia. Y entonces, al observar el contorno del bloque de tierra, comprendes el motivo de su arrobamiento…"
    ],
    "choices": [
      {
        "text": "Descúbrelo en la página 7",
        "toId": "7"
      }
    ]
  },
  "86": {
    "id": "86",
    "title": "Página 86",
    "text": [
      "No te es complicado concertar una entrevista con el inspector Legrasse.",
      "En su despacho huele a tabaco y toda la estancia está sumida en la penumbra, una semioscuridad viciada por el intenso calor de Nueva Orleans.",
      "El inspector John Raymond Legrasse resulta ser un hombre franco y agradable, y notas que empatiza de inmediato con tus preocupaciones acerca de la muerte de tu tío abuelo y las investigaciones que te han llevado hasta allí. Te has traído contigo todo el material que el profesor Angell te legó y, entusiasmado, se lo enseñas al inspector.",
      "——Maldita sea ¿¡Otra vez!? —exclama Legrasse.",
      "—¿Disculpe? —preguntas algo aturdido —¿Nos hemos visto ya?",
      "El viejo inspector murmura algo para sus adentros antes de recostarse en su vieja silla.",
      "——Debo haberle confundido con otro. — Responde, pero no deja de examinarte de arriba abajo.— Déjeme contarle una historia.",
      "Confuso, pero cautivado por su tono grave y comedido, y medio hipnotizado por el abundante humo de su tabaco especiado, te aprestas a oír su relato."
    ],
    "choices": [
      {
        "text": "Escucha la narración del inspector Legrasse en la página 67",
        "toId": "67"
      }
    ]
  },
  "87": {
    "id": "87",
    "title": "Página 87",
    "text": [
      "Estás pasando una noche horrible, y no precisamente debido al frío, ya que las paredes de la hostería están especialmente diseñadas para soportar las gélidas temperaturas de Groenlandia; lo que te está desvelando es la horrible cadena de oraciones paganas que, durante toda la noche, oyes pronunciar al profesor Webb. A medida que tu vista se acostumbra a la penumbra de la habitación, te da la sensación de que Webb se encuentra de rodillas frente a su cama, y crees adivinar sobre el colchón, la presencia del ídolo de piedra. Por tu propia salud mental, cierras los ojos con fuerza y te repites que eso no está pasando. Pero al amanecer tienes la certeza casi absoluta de que Webb se ha vuelto completamente loco. De alguna manera, te resistes a aceptar esta realidad, pero las evidencias parecen innegables.",
      "No son todavía las seis de la mañana cuando el profesor Webb se acerca a tu lecho y te dice que te prepares, ya que el vehículo que os ha de conducir hasta el interior de la isla —un trineo impulsado por perros— pronto estará listo. El brillo demente que detectas en los ojos del profesor es casi palpable. ¿Y si fingieras encontrarte enfermo para, una vez que él emprenda el viaje, regresar a la civilización? ¿O acaso crees que es una tontería haber llegado hasta aquí para ahora echarte atrás?"
    ],
    "choices": [
      {
        "text": "Si quieres inventarte algo y dejar que Webb se entregue a su loca expedición en solitario, ve a la página 91",
        "toId": "91"
      },
      {
        "text": "O bien confía en que todo saldrá bien y acompáñale en la expedición, en la página 54",
        "toId": "54"
      }
    ]
  },
  "88": {
    "id": "88",
    "title": "Página 88",
    "text": [
      "Entiendes que Wilcox, con su locura a cuestas, puede ser más una rémora que una ayuda, así que lo dejas en su refugio a merced de su desequilibrio mental y sus esculturas de arcilla y te diriges a la Universidad de Miskatonic, ansioso por echar un vistazo al famoso Necronomicón.",
      "Te recibe el bibliotecario, el profesor Henry Armitage, un hombre ya entrado en años y de pelo canoso. En los ambientes académicos en los que te mueves habitualmente están más que contrastadas su gran sabiduría y su profunda erudición. No te conoce personalmente, pero tenía una gran relación con el acreditado profesor George Gammell Angell, tu tío abuelo, así que te recibe con extrema cordialidad. Le hablas del Necronomicón, momento en el cual su gesto cambia radicalmente, volviéndose oscuro y con síntomas de visible crispación."
    ],
    "choices": [
      {
        "text": "Descubre el motivo de su malestar en la página 60",
        "toId": "60"
      }
    ]
  },
  "89": {
    "id": "89",
    "title": "Página 89",
    "text": [
      "La entrevista con Legrasse te ha abierto una nueva vía de investigación. Esa misma tarde, y motivado por sus palabras y su relato a medias, coges un buque que parte desde el mismo puerto de Nueva Orleans rumbo a Europa. Su desembarco está programado en Gotemburgo y desde allí tendrás que establecer algunas conexiones para llegar hasta Oslo, pero estás dispuesto a hacerlo. El barco zarpa antes de la caída del sol, y te aprestas a cruzar el Atlántico.",
      "La travesía es larga y tediosa, pero finalmente llegas a Suecia y, tras los debidos enlaces, a la capital de Noruega y hasta el hogar del mismísimo Johansen. Golpeas la puerta de su casa y te atiende su mujer.",
      "Tras presentarte, ella te invita a pasar, aliviada de poder compartir con alguien el temor que la atenaza.",
      "—Mucho me temo que Gustaf ha muerto en extrañas circunstancias —dice. En ese instante gira la cabeza de un lado a otro, como si temiera que la estuviesen escuchando—. Un contenedor de viejos periódicos le ha caído en la cabeza mientras cruzaba un callejón en el puerto. No obstante, el manuscrito sigue aquí.",
      "La mujer de Johansen deposita la taza de té de la que bebe sobre la mesa, temblando visiblemente, y te cede muy amablemente un grueso fajo de papeles atados por un cordel de esparto.",
      "La mujer parece aliviada de haberse librado del documento, así que te dispones a regresar. Ha sido un viaje muy largo y el resultado es más bien magro, pero entiendes que en este manuscrito puedes hallar alguna respuesta.",
      "Una vez a bordo del barco que te lleva de regreso a casa, te preguntas qué tan espeluznante puede ser la historia que narra Johansen en aquellas páginas…",
      "Sea como sea, contén tus ansias por leerla hasta que estés en tu hogar."
    ],
    "choices": [
      {
        "text": "Enfréntate al manuscrito de Johansen en la página 99",
        "toId": "99"
      }
    ]
  },
  "90": {
    "id": "90",
    "title": "Página 90",
    "text": [
      "El San Juan Bautista, el navío que los miembros de la cofradía han estado preparando, está listo para zarpar desde el puerto de San Francisco. Observas el barco con preocupación y no da la impresión de ser muy resistente. ¿Y si esta misión comandada por este grupo de místicos arrebatados acaba en un naufragio? O, aún peor: ¿y si realmente surgiera ante tus ojos la ancestral y subacuática ciudad de R’lyeh? ¿Qué pasaría si en verdad estos fanáticos fueran capaces de invocar y liberar a ese dios primigenio al que llaman Cthulhu?",
      "Tus ansias investigativas y tu afán por convertirte en un antropólogo de renombre, te dicen que zarpes con ellos, pero tu prudencia te indica que tal vez deberías mantenerte en un plano de investigación meramente racional. Has traído contigo el informe del inspector Legrasse y tu viaje al sudoeste de Estados Unidos te ha acercado bastante a la ciudad de Nueva Orleans. Por un instante, te planteas la posibilidad de olvidarte de la comuna de teósofos y visitar al inspector en Luisiana.",
      "Eres tú quien debe decidir…"
    ],
    "choices": [
      {
        "text": "Si zarpas en el San Juan Bautista con el padre Juárez y sus místicos, hazlo en la página 37",
        "toId": "37"
      },
      {
        "text": "Si declinas la oferta del viaje, siempre puedes dirigirte a Nueva Orleans para ver al inspector Legrasse, haciéndole una visita en la página 86",
        "toId": "86"
      }
    ]
  },
  "91": {
    "id": "91",
    "title": "Página 91",
    "text": [
      "Desconfías de que las cosas puedan salir bien al lado de un demente como Webb, cuya cordura ha ido desmoronándose desde que le enseñaste el bajorrelieve de arcilla. Finges tener una gripe y esperas algún tipo de reacción, pero Webb no se muestra en absoluto decepcionado. Está decidido a llegar hasta el corazón de esa comuna de esquimales, y lo hará con o sin tu ayuda.",
      "Menos de una hora después, y desde la ventana de tu cuarto, le ves partir rumbo al interior de la isla montado en el trineo tirado por los perros. A su lado viaja la escalofriante estatuilla de piedra jabonosa. Cruzar solo la planicie helada es un suicidio, por lo que, en cierta manera, estás condenando a ese pobre desgraciado a la muerte.",
      "De alguna manera esta investigación te ha cambiado, corriendo las cortinas das un suspiro de alivio. Eres consciente de que has estado a punto de cometer una locura. Un par de horas después, y una vez que te cercioras de que Webb ya no regresará, te diriges al bergantín y sobornas vilmente a los marineros para que te saquen de allí. En un principio se niegan a aceptar la proposición, pero no hay voluntad que el vil metal no pueda doblegar. Terminan cediendo y no mucho después el barco zarpa con rumbo a Nueva Inglaterra.",
      "Una vez en casa, indudablemente te sientes más seguro. No quieres ni pensar en cuál habrá sido el destino del profesor Webb.",
      "En cuanto a ti, crees que puedes encarar la investigación por vías más seguras… o quizá abandonarla antes de volverte loco para siempre."
    ],
    "choices": [
      {
        "text": "Si aún no has examinado a fondo el bajorrelieve de arcilla, hazlo en la página 32",
        "toId": "32"
      },
      {
        "text": "Si crees que ya has dado suficientes vueltas por el mundo, céntrate en las pistas que te conducen al entorno más cercano al profesor Angell, en la página 20",
        "toId": "20"
      },
      {
        "text": "Si prefieres regresar a la tranquilidad de tu hogar y olvidarte de esta investigación, ve a la página 11",
        "toId": "11"
      }
    ]
  },
  "92": {
    "id": "92",
    "title": "Página 92",
    "text": [
      "Te unes al profesor Webb en su expedición.",
      "Viajáis a Liverpool y durante los dos días siguientes os preparáis para la partida. Para tu asombro descubres que el pequeño bergantín en el que habéis de viajar apenas cuenta con tripulación especializada. Una vez te instalas en el camarote de popa el profesor Webb se reúne contigo. Quiere mostrarte algo muy especial. De un baúl extrae una estatuilla.",
      "La figura tiene unos veinte centímetros de altura y está artísticamente labrada. Representa al mismo monstruo con cabeza de octópodo, y cuyo rostro es una masa de palpos. Posee un cuerpo de aspecto obeso y cubierto de escamas, garras desproporcionadas en las extremidades traseras y unas alas estrechas en la espalda.",
      "—Este es Cthulhu; usted ya lo conoce de ese bajorrelieve que me enseñó. El inspector Legrasse, un policía de Luisiana, le cedió esta estatuilla a mi padre en 1908.",
      "Es horrenda, piensas, mientras contemplas el contorno resbaladizo de la estatuilla. La repugnancia que produce parece trascender lo meramente estético. Es una sensación de incomodidad susurrada desde el mismísimo interior de tu cerebro reptiliano.",
      "—El inspector Legrasse confiscó esta figura tras una redada, después de desbaratar un culto vudú en los pantanos. Creyó que mi padre era el más indicado para poseerla…, aunque creo que se deshizo de ella gustosamente.",
      "Por su tono de voz reverencial y sus aspavientos cuando tratas de ver la estatuilla más de cerca, se detecta un dejo de locura en la mirada del profesor Webb.",
      "—… Y le digo más, señor Thurston: esta belleza será nuestro salvoconducto en Groenlandia.",
      "Menos de una hora después el barco zarpa del puerto de Liverpool en dirección norte, rumbo a las gélidas costas de Groenlandia."
    ],
    "choices": [
      {
        "text": "Visita esta tierra helada en la página 76",
        "toId": "76"
      }
    ]
  },
  "94": {
    "id": "94",
    "title": "Página 94",
    "text": [
      "La estatua del dios resulta interesantísima como objeto arqueológico, pero lo que se intuye allá abajo, al fondo del valle umbrío y cubierto de restos fosilizados de peces y anfibios, parece peligrosamente demencial.",
      "El padre Juárez es presa de un éxtasis religioso que colinda con la más espantosa locura. Casi no te escucha cuando tratas de convencerlo para volver al San Juan Bautista. Puede que hayáis hecho un descubrimiento interesante, pero este sitio no es R’lyeh.",
      "Pones todo tu empeño en persuadir a la tripulación de que lo mejor es regresar, y finalmente lo consigues. Dais la vuelta y descendéis por la misma ladera que ascendisteis, y pronto todo el grupo está a bordo del San Juan Bautista.",
      "Os alejáis de esta isla misteriosa y desconocida para la humanidad, aliviados de no haber tenido contacto con quienes fuera que habitan allí…"
    ],
    "choices": [
      {
        "text": "Aléjate navegando de esta tierra ignota, rumbo a la página 85",
        "toId": "85"
      }
    ]
  },
  "95": {
    "id": "95",
    "title": "Página 95",
    "text": [
      "Preparas una maleta con tus pertenencias y te llevas el contenido de la caja que te ha legado tu tío abuelo, incluido el bajorrelieve de arcilla. Es posible que te sea de utilidad mientras sigues el rastro de ese suicidio inexplicable que ha tenido lugar en Londres. Coges un barco rumbo al Reino Unido, intrigado sobre el verdadero alcance de la investigación del profesor Angell.",
      "Llegas Londres y haces unas cuantas indagaciones. El suicida es un tal Hugh Spencer, de Carnaby Street, en pleno centro de Londres. Vivía con su mujer en una quinta planta, desde la cual se arrojó de cabeza a través de la ventana sin que se le conocieran deudas o problemas emocionales. Sus vecinos te dicen que lo único llamativo eran las pesadillas que sufrió durante el mes precedente a su muerte. Te interesa entrevistarte con su mujer, pero después de la tragedia se ha ido a vivir a Kent con unos parientes.",
      "Decepcionado, te sientas en una cafetería en Piccadilly Circus y hojeas un poco el manuscrito que te ha legado tu tío abuelo, el segmento titulado «Informe del inspector John R. Legrasse, Bienville St., 121, Nueva Orleans (Luisiana), al Congreso de la Sociedad Americana de Arqueología, 1908. Notas sobre la misma, y declaración del profesor Webb». Te llama la atención encontrar allí otra vez una dirección de Londres. Por lo visto, aquí vive el hijo de tal profesor Webb. Quizá pueda ser una buena idea intentar contactar con él…"
    ],
    "choices": [
      {
        "text": "Si consideras que puede ser relevante una entrevista con Webb, sigue su pista en la ciudad de Londres en la página 6",
        "toId": "6"
      },
      {
        "text": "Si aún no has visitado el Salón de Primavera de París y quieres hacerlo ahora —ya que solo es cuestión de cruzar el canal de la Mancha—, ve a la página 102",
        "toId": "102"
      },
      {
        "text": "Si crees que nada más puedes sacar de este viaje a Europa, regresa a América en la página 20",
        "toId": "20"
      }
    ]
  },
  "96": {
    "id": "96",
    "title": "Página 96",
    "text": [
      "¡R’lyeh está ahí mismo, delante de vuestros ojos anonadados! Wilcox y tú, inesperadamente convertidos en los señores de esta expedición, os asomáis a cubierta y contempláis la monstruosa y demencial arquitectura que se yergue en medio del atolón de tierra. La isla es tal cual la describió Wilcox en sueños: un montículo de tierra cubierto de pináculos y minaretes, con escalones de piedra chorreante y jabonosa que preceden a una especie de mampostería de ángulos no euclidianos que pone los pelos de punta. Te cuesta identificar las líneas verticales, horizontales y diagonales de la construcción, ya que el aspecto general de su estructura transmite una sensación inexplicablemente alienígena.",
      "Sea como sea, atracáis en un banco de arena y, olvidando los cadáveres de los bucaneros amontonados en el camarote, bajáis por la pasarela del Neptuno dando saltos de emoción, convencidos de que seréis los primeros en descubrir los misterios ancestrales que se ocultan en esta isla.",
      "Pero no habéis avanzado cuatro pasos sobre el atolón cuando Wilcox, a voz en grito, señala algo extraño ubicado una centena de metros más allá.",
      "—¡Creo que es un barco varado! —exclama.",
      "Tiene razón. Lo que se aprecia en la distancia es el armazón medio destruido de una embarcación abandonada."
    ],
    "choices": [
      {
        "text": "Llenos de curiosidad, os acercáis a los restos de este naufragio en la página 59",
        "toId": "59"
      }
    ]
  },
  "97": {
    "id": "97",
    "title": "Página 97",
    "text": [
      "Entiendes que lo mejor es dialogar. Probablemente puedas disparar a Connolly y acabar con él, pero eso haría que la horda de marineros que aguarda en cubierta cayera sobre vosotros, y seríais quince contra dos. Es preferible mantener la calma. Quizá una buena mentira surta su efecto.",
      "—Vamos en busca de un tesoro, capitán —dices, y dejas el arma a un lado.",
      "Connolly deja de apuntarte con el mosquete.",
      "—Un tesoro, ¿eh?",
      "—Sí. Según las indicaciones, puede contener una suma de ¡un millón de dólares!",
      "—Y lo compartiremos a partes iguales —se precipita Wilcox.",
      "Una sonrisa lobuna aparece en el rostro de Connolly. Con su mano nudosa se mesa la barba renegrida que cubre su rostro.",
      "—Hum… —murmura—. Muy bien. Es un trato, y por mi sangre que se lo haré cumplir. Vuelvo a cubierta; no queda mucho para que atraquemos. ¡Un millón de dólares!",
      "Connolly sale del camarote totalmente extasiado ante la idea de hacerse con la mitad de semejante suma.",
      "Wilcox se acerca a ti.",
      "—¿Se ha vuelto loco? —espeta—. ¿Qué haremos cuando lleguemos a la isla y esos tipos vean que no hay tesoro? ¡Nos van a matar como a perros!",
      "Sonríes de lado. Cada día desde que has empezado esta investigación algo ha ido creciendo dentro de ti, la idea de que verdaderamente ese dios tentacular yace oculto bajo el sello. Una vez estéis en sus dominios él se encargará de todo.",
      "—No se preocupe —dices a Wilcox—. Una vez lleguemos allí, las amenazas de esos tipos serán nuestra menor preocupación."
    ],
    "choices": [
      {
        "text": "Dispuesto a contemplar por fin vuestro destino, salís a cubierta en la página 58",
        "toId": "58"
      }
    ]
  },
  "98": {
    "id": "98",
    "title": "Página 98",
    "text": [
      "La media milla a pie se hace muy breve. Tienes la sensación, durante la caminata, de que el ídolo de piedra emite unas extrañas vibraciones en las manos de Webb.",
      "Finalmente, llegáis donde se celebra el ritual. En medio de un círculo de oficiantes, todos ellos cubiertos con gruesos abrigos de piel, se eleva una especie de columnata gaseosa y multiforme, se diría que conformada mediante el vapor condensado que emana del suelo congelado. Al principio tan solo parece una capa de niebla, pero poco después, y ante vuestra estupefacción, cobra la forma de un pedestal.",
      "La tribu entona un cántico demencial de invocación, ante el cual la estatuilla que porta Webb parece vibrar con mayor intensidad.",
      "—Mejor… Mejor nos largamos de aquí, profesor Webb —murmuras.",
      "Él vuelve a mirarte como si fueras un demente.",
      "—¡Cállese, Thurston! —espeta—. Ellos esperan la venida de este ídolo. Y seré yo quien se los entregue. Solo así podrán completar el ritual de invocación, y solo así será posible la venida del Gran Cthulhu.",
      "Sin decir más, se adentra en medio de los esquimales con el ídolo en la mano. Los celebrantes, efectivamente, reciben la estatuilla como un regalo de los cielos.",
      "En el último momento dudas sobre qué hacer a continuación…"
    ],
    "choices": [
      {
        "text": "Si quieres acompañar al profesor Webb e involucrarte en el ritual, ve a la página 103",
        "toId": "103"
      },
      {
        "text": "Si prefieres observar el rito litúrgico desde una distancia prudencial, hazlo en la página 107",
        "toId": "107"
      }
    ]
  },
  "99": {
    "id": "99",
    "title": "Página 99",
    "text": [
      "Estás de nuevo en Boston, en la confortable sala de lectura de tu hogar. Has hecho una enorme travesía de ida y vuelta a Oslo y lo único que has conseguido traer de allí es un manuscrito arrugado del tal Gustaf Johansen, el marinero noruego que, según palabras de Legrasse, habría estado en la mismísima R’lyeh dos años atrás, cuando comenzaron las pesquisas del profesor Angell.",
      "Hay algo siniestro, algo oscuro en el manuscrito y, por algún motivo, dudas de si deberías leerlo o no. El pobre Johansen no acabó bien, al igual que el profesor Angell. Si lo piensas bien, parece que hacerse con demasiada información sobre este culto implica volverse peligroso para los adoradores de Cthulhu.",
      "¿Estás dispuesto a recorrer el mismo camino que llevó tu tío abuelo? ¿Es escuchar la llamada de este ser, Cthulhu, un modo de ganarse un final atroz? ¿O son todo supercherías?"
    ],
    "choices": [
      {
        "text": "Si decides leer de todas maneras el manuscrito, hazlo en la página 2",
        "toId": "2"
      },
      {
        "text": "Si decides arrojarlo al fuego y abandonar para siempre esta investigación, enciende una hoguera de justicia en la página 11",
        "toId": "11"
      }
    ]
  },
  "100": {
    "id": "100",
    "title": "Página 100",
    "text": [
      "—¿Qué es todo esto? —preguntas anonadado.",
      "—¡Es el Gran Cthulhu, señor Thurston! —dice Wilcox con miedo—. Todas estas obras las he realizado en sueños, al igual que la tablilla que hice para el profesor Angell.",
      "—Pero todo esto es muy reciente —replicas al tiempo que, con suma repugnancia, constatas el frescor de varias de las piezas.",
      "—En efecto. Todo esto lo he realizado a lo largo de las últimas dos semanas —nerviosamente casi te restriega por la cara una de las aberrantes piezas—. Sí, señor Thurston… Eso quiere decir que el advenimiento del Gran Cthulhu se acerca nuevamente.",
      "Un escalofrío recorre tu cuerpo. Sin duda Wilcox no es un tipo cuerdo, pero algo te dice que esos sueños y pesadillas han de tener algún origen. Observas los jeroglíficos que ha redactado sobre el papel pintado de las paredes valiéndose de un carboncillo o un trozo de grafito.",
      "—¿Qué son esas escrituras? —preguntas—. ¿Qué representan?",
      "—Es el contenido de un libro maldito —dice—. El oscuro Necronomicón.",
      "La sola mención de este volumen prohibido te hace estremecer.",
      "—He tenido acceso a él durante esos sueños y he logrado transcribir parte de su contenido… ¡en su idioma original!",
      "Te acercas a las paredes. Has oído decir que hay un ejemplar del Necronomicón en la Universidad de Miskatonic, en Arkham. Piensas que tal vez entre sus páginas encuentres la respuesta que estás buscando. Por otro lado, también te gustaría indagar un poco más en la mente del chico, aunque fuera de este recinto de demencia en el que se aloja. Quizá invitarlo a tu casa no sea mala idea…"
    ],
    "choices": [
      {
        "text": "Dirígete a la Universidad de Miskatonic, donde puedes acceder a las páginas del Necronomicón en la página 88",
        "toId": "88"
      },
      {
        "text": "O invita a Henry Wilcox a tu casa; quizá puedas interrogarle en profundidad o sondear sus sueños alucinatorios en página 14",
        "toId": "14"
      }
    ]
  },
  "101": {
    "id": "101",
    "title": "Página 101",
    "text": [
      "Esta línea de investigación te ha llevado a pisar un terreno muy pantanoso y estrechamente relacionado con un halo de locura que no te produce buenas vibraciones. También te ha empujado a contactar con gente que no parece muy equilibrada.",
      "Lo mejor sería centrarse en alguno de los demás elementos que componen la caja que has heredado de tu tío abuelo. Por ejemplo, en el manuscrito que redactó el mismo profesor Angell, o quizá en los recortes de periódico que con tanto afán ha recopilado.",
      "Vuelves a la caja que te ha sido legada y continúas la investigación…"
    ],
    "choices": [
      {
        "text": "Examinando, si aún no lo has hecho, los numerosos recortes de periódico que hay en la página 56",
        "toId": "56"
      },
      {
        "text": "O echando un vistazo al manuscrito del profesor Angell, si aún no lo has leído, en la página 17",
        "toId": "17"
      }
    ]
  },
  "102": {
    "id": "102",
    "title": "Página 102",
    "text": [
      "Llegas a Marsella y ese mismo día tomas el expreso, que te deja en París, horas después. Te interesa el revuelo generado en el Salón de Primavera, así que acudes allí para recoger información sobre lo ocurrido en referencia al mencionado Paisaje Onírico.",
      "Han transcurrido casi dos años, pero los organizadores del festival recuerdan muy bien el incidente. El óleo expuesto por Ardois-Bonnot produjo honda repulsión en todos los presentes. Los expertos en arte pictórico no saben decir exactamente a qué se debió esa sensación de estupor y pavor, pero lo cierto es que muchos de los asistentes, e incluso algunos de los miembros del jurado del festival, huyeron despavoridos de la sala de exposición ante la mera contemplación del lienzo.",
      "Tal vez de forma imprudente, solicitas echar un vistazo al cuadro. Te conducen a una sala muy reducida, un cuartucho de un metro cuadrado, donde tienen el cuadro colgado de una pared… ¡aunque cubierto por un paño! Los encargados del Salón de Primavera te dicen que su sola visión resulta tan perturbadora que nadie se ha atrevido a retirar aquel paño.",
      "—¿Cómo puedo hacer para verlo? —preguntas.",
      "Los sujetos intercambian una mirada llena de incomodidad.",
      "—Lo único que puede hacer es adquirirlo. Entonces podrá hacer lo que quiera con esa cosa… ¡pero tendrá que hacerlo muy lejos de aquí, monsieur Thurston!",
      "El precio es elevado, pero asumible. Otra cosa es que realmente tengas la valentía de comprar el cuadro y contemplar la obra…"
    ],
    "choices": [
      {
        "text": "Si adquieres el Paisaje Onírico, dispuesto a retirar el paño y contemplarlo a cualquier precio, ve a la página 46",
        "toId": "46"
      },
      {
        "text": "Si crees que la cercanía de ese cuadro te puede conducir a la locura, márchate del Salón de Primavera y, si aún no has visitado Inglaterra, cruza el canal de la Mancha en busca del anónimo suicida de Londres en la página 95",
        "toId": "95"
      },
      {
        "text": "Si crees que nada más sacarás de este viaje a Europa, regresa a América en la página 20",
        "toId": "20"
      }
    ]
  },
  "103": {
    "id": "103",
    "title": "Página 103",
    "text": [
      "Con cuatro rápidas zancadas, alcanzas al profesor Webb, que entrega el ídolo de piedra al jefe de la tribu esquimal. Este lo coloca encima del pedestal y, un segundo después, empiezan otra vez los cánticos. Es una letanía demencial, llena de consonantes y palabras impronunciables. Lo peor de todo es que Webb parece conocer estos himnos a la perfección, ya que se une a ellos como si fuera uno más de la cofradía. La figura en lo alto del pedestal comienza a vibrar… y casi puedes asegurar que crece ante tus ojos.",
      "Los cánticos ganan en excitación y, no mucho después, sientes que el suelo bajo tus pies tiembla. Las voces se elevan y el cielo se oscurece, y unos audibles ¡cracks! anuncian el resquebrajamiento del suelo gélido sobre el que estáis de pie. Miras hacia abajo y en medio de la transparencia del hielo alcanzas a vislumbrar, bajo la debilitada y espejada superficie, una figura tentacular que se acerca nadando, ¡abriéndose paso entre el agua escarchada!",
      "Un temblor final hace que todo se estremezca espectacularmente, hasta que…"
    ],
    "choices": [
      {
        "text": "Experimentas el cataclismo en la página 64",
        "toId": "64"
      }
    ]
  },
  "105": {
    "id": "105",
    "title": "Página 105",
    "text": [
      "No puedes irte de allí sin intentar ayudar al profesor Armitage. Aunque fuese involuntariamente, has sido tú quién ha invocado a la criatura.",
      "Haces caso omiso de su advertencia y te lanzas hacia delante. Enseguida te das cuenta de que el ser está absorbiendo la sangre del profesor y que este parece consumirse y marchitarse con cada embestida.",
      "Con cada sorbo de sangre, va tomando consistencia. Se trata de una criatura alada, llena de pólipos y excrecencias; una masa de tentáculos fluctuantes que metamorfosea al tiempo que crece y mengua a voluntad.",
      "No puedes hacer nada por ayudar a Armitage. Tiras de él, golpeas con puños y patadas al ser, pero la bestia permanece aferrada al profesor y no le suelta hasta dejarle hecho un guiñapo, un saco de huesos sin vida y sin una sola gota de sangre.",
      "El cadáver marchito y consumido cae al suelo con un sonido gomoso estremecedor. La criatura, ya completamente visible y conformada por una miríada de riachuelos del icor robado al pobre bibliotecario, se da la vuelta y va a por su siguiente víctima: ¡TÚ!",
      "Intentas huir, pero la bestia se abalanza sobre ti, clavando en tu cuello una especie de garra gelatinosa y flexible. Sientes que un tentáculo rodea tu cuello y que su contacto ardiente empieza a penetrar todos tus poros. La comunión de tu organismo con el de esa masa gelatinosa te genera un dolor que apenas puedes expresar mediante aullidos de agonía.",
      "La inconcebible criatura es una masa rojiza que contradanza y se contorsiona ante tus ojos cubiertos por una pátina de lágrimas. Sientes una debilidad enorme a medida que tu cuerpo se vacía de sangre. Antes de que te trague la oscuridad, no puedes evitar echar un último vistazo a la masa iridiscente y palpitante de sangre que, triunfante, fluctúa cerca del techo de la habitación…, esa criatura que has liberado TÚ.",
      "FIN"
    ],
    "choices": []
  },
  "106": {
    "id": "106",
    "title": "Página 106",
    "text": [
      "El episodio que tuvo lugar a bordo del Neptuno te ha infundido un valor que nunca soñaste que ibas a tener. Y lo mismo le ocurre a Wilcox. Una tragedia sangrienta y espeluznante ha tenido lugar en esa isla, y toda la tripulación de una embarcación anónima ha sido brutalmente masacrada. ¿Qué o quién ha sido el responsable de semejante carnicería? ¿Una tribu de salvajes que habita estas tierras ignotas y que le rinde culto al dios octópodo? ¿El propio dios Cthulhu, escapado de su morada? ¿Alguna otra criatura de formas nunca soñadas por cerebro humano alguno?",
      "Parece que solo adentrándoos en la isla lo averiguaréis. Seguís el rastro de cadáveres y miembros cercenados hasta el interior del atolón. Subís las escalinatas que os conducen hasta el templo de piedra informe de Cthulhu. El ascenso es confuso y desquiciante, ya que la arquitectura del lugar vuelve imposible la identificación entre verticalidad y horizontalidad, entre convexidades y concavidades… ¡Arriba y abajo parecen estar a derecha o izquierda, y en ocasiones puedes asegurar que os encontráis con el cielo azul ¿bajo vuestras cabezas?",
      "Finalmente, y tras un ascenso desesperante por este paisaje escheriano, llegáis hasta el soportal tallado que contuvo prisionero durante eones a este dios Primigenio… ¡solo para comprobar que la puerta está abierta, y que a través de su hueco emana a la superficie una oscuridad tangible y un hedor nauseabundo!",
      "—Ha escapado… —murmura Wilcox.",
      "—Más bien, alguien lo ha dejado escapar…",
      "De repente, un rugido a vuestras espaldas os sobresalta de tal manera que a punto estáis de caer en el negro abismo que fue la morada del dios.",
      "Con vuestra cordura a punto de resquebrajarse, os dais la vuelta en busca del origen de semejante bramido…"
    ],
    "choices": [
      {
        "text": "Descubre qué emite ese espantoso rugido alienígena en la página 80",
        "toId": "80"
      }
    ]
  },
  "107": {
    "id": "107",
    "title": "Página 107",
    "text": [
      "Desde la distancia observas cómo el profesor Webb lleva el ídolo de piedra hasta el corazón del ritual. Los oficiantes dejan de cantar, alelados ante la presencia de la estatuilla, y la colocan sobre un pedestal que se yergue en medio del hielo. Un segundo después, los oficiantes extraen unos cuchillos curvos de entre sus ropajes. Sin dilación, caen sobre el pobre y fascinado Webb, masacrándolo sin piedad. Una explosión de vísceras y sangre tiñe el suelo helado.",
      "Para tu completa ofuscación, observas que el ídolo de piedra empieza a crecer de tamaño en lo alto del pedestal, y antes de que la locura se vuelva algo tangible y te aplaste, giras sobre ti mismo dispuesto a huir… pero en ese momento te detiene un dolor lacerante en el estómago. Cierras los ojos. Sientes correr la sangre por tu vientre y escurrirse cálidamente entre tus piernas. Cuando los abres, te enfrentas a la mirada lunática de uno de esos esquimales. Desde el fondo de su capucha brillan unos ojos inyectados en sangre. En sus manos aferra una gruesa lanza, una especie de arpón que seguramente utilizan para cazar morsas u otras bestias del frío. El incivilizado esquimal te la ha clavado en la boca del estómago, y ahora sobrepuja la pica y te la hunde todavía más, abriéndose camino por tus entrañas hasta asomar por la espalda. Después, con extraordinaria fuerza, coloca la lanza en posición vertical y ensarta el extremo inferior en el hielo, alzándote como un espantoso trofeo.",
      "Horriblemente empalado, te deslizas por la madera astillada que te desgarra las vísceras, que ya comienzan a escarcharse por el frio polar.",
      "Intentas comprender el porqué de este aciago destino, y solo entonces vuelves a oír los cánticos dementes de la tribu, que vuelve a adorar al Gran Cthulhu en la forma de aquel ídolo de piedra que, sin piedad, han arrancado de las manos a un par de visitantes incómodos…",
      "¡IÄ, IÄ CTHULHU FHTAGN!",
      "FIN"
    ],
    "choices": []
  },
  "108": {
    "id": "108",
    "title": "Página 108",
    "text": [
      "Dentro del templo se está celebrando algún tipo de impío y sacrílego ritual pagano. Os internáis atropelladamente en un corredor a oscuras, pero pronto las luces de las decenas de antorchas que penden de las paredes iluminan el impresionante recinto interior. Se trata de un templo de unos veinticinco metros de altura, de forma piramidal.",
      "En el centro, y sobre una especie de altar de piedra intrincadamente tallado y cubierto de jeroglíficos, se encuentra un ídolo muy similar al que visteis en la cima de la colina: un engendro de dos metros y medio de estatura, fuerte y musculoso, con rostro pisciforme, aunque de rasgos innegablemente humanos. La piel escamosa, las manos palmípedas, una pequeña aleta en forma de cresta que recorre su espalda verdosa, labios gruesos, ojos saltones…",
      "De repente, este nuevo ídolo… ¡Mueve la cabeza de un lado para otro y extiende los brazos!",
      "Con un pavor fruto de la completa incomprensión, aceptáis que no estáis ante una representación de un dios marino, sino ante el dios mismo. La criatura exuda la misma sustancia verde y viscosa que el tótem de la cima y el templo, y emite una especie de graznido o croar monótono y repetitivo que os taladra el cerebro. Suena igual que un gramófono mal ajustado que emitiera a bajas revoluciones.",
      "Perturbados ante la figura imponente de esta criatura de los abismos, os dais la vuelta para marcharos… demasiado tarde…"
    ],
    "choices": [
      {
        "text": "Descubre qué os impide escapar en la página 109",
        "toId": "109"
      }
    ]
  },
  "109": {
    "id": "109",
    "title": "Página 109",
    "text": [
      "El camino que lleva a la salida se ha poblado de una multitud de seres deformes, criaturas híbridas en cuya constitución genética sin duda se identifican rasgos de peces, batracios, anfibios y humanos. Son similares al dios que se alza en medio del altar, solo que de un tamaño parecido al vuestro… Pero son una auténtica multitud. Parecen surgir de las paredes, de oscuros túneles practicados en el suelo… ¡de las entrañas mismas de aquellas catacumbas sudorosas y asfixiantes!",
      "Son cientos y cientos. Balbucean palabras ininteligibles, al tiempo que continúan con su impío cántico de adoración: ¡Iä, Iä Dagon-Cthulhu!",
      "Os preguntáis cómo es posible que no los hubieseis visto nada más penetrar en el recinto, y pronto os dais cuenta de que su piel escamosa se camufla con gran facilidad en el color esmeralda sucio de las paredes.",
      "Dagón, el dios-pez que se yergue en la cima del altar, emite un croar final. Es la hora del sacrificio y los repugnantes miembros de esta raza desconocida ya han elegido a sus víctimas propiciatorias: ¡VOSOTROS!",
      "La multitud híbrida cae sobre todo el grupo. Sus manos palmípedas os golpean y zarandean, y sus ojos saltones giran de expectación en las cuencas. Debilitados, sangrando por un millar de pequeños arañazos y mordiscos, acabáis de rodillas ante el ser conocido como Dagón. Lo último que ves es su enorme boca erizada de dientes abriéndose a una velocidad que contradice su aspecto abotargado.",
      "FIN"
    ],
    "choices": []
  },
  "110": {
    "id": "110",
    "title": "Página 110",
    "text": [
      "Lanzarte de cabeza a aquel piélago de oscuridad impenetrable no parece la mejor forma de salvar el pellejo. No obstante, la convicción con la que se lo ves hacer a los supervivientes de la comuna de teósofos —que no son muchos a estas alturas—, sumado a la presencia amenazadora del dragón-cefalópodo que lo destruye todo a su paso te llevan a, en un impulso final, buscar allí la salvación. Tras presenciar la valiente zambullida del padre Juárez, profieres un grito de locura total y te arrojas de cabeza al abismo.",
      "Muy pronto la oscuridad y el silencio te envuelven y comienzas a caer… A caer al interior de un vacío que parece no tener fin.",
      "Tus sentidos están embotados. No oyes, hueles, ni ves absolutamente nada. Ni siquiera puedes oír tus propios gritos. Solo tienes la sensación de estar deslizándote verticalmente… hacia abajo, siempre hacia abajo.",
      "De repente, tu sentido del tacto se reactiva y notas cómo tu cuerpo se sumerge en un océano de masas pulposas, gélidas y desagradables. Sientes un millar de tentáculos palpando tu humanidad, como si algo inspeccionara tu anatomía valiéndose de una especie de intestino grueso descomunal. Entonces chocas contra algo y tienes la sensación de que hay alguien más contigo allí, en medio de la negrura.",
      "No mucho después sufres un nuevo impacto. La caída ha concluido y eres excretado contra el lecho, al final de ese oscuro túnel por el que te has arrojado.",
      "La masa gelatinosa que te envuelve ha amortiguado la caída y milagrosamente no sufres daños. Tus sentidos se despejan un poco y comienzas a oír voces desesperadas y confusas. Nada, sin embargo, es capaz de aniquilar la oscuridad que te rodea.",
      "Ciego y obnubilado, envuelto en una mucosa maloliente, te pones de pie y comienzas a caminar, tanteando a tu alrededor con los brazos estirados."
    ],
    "choices": [
      {
        "text": "Encuentra una posible salida en la página 15",
        "toId": "15"
      }
    ]
  },
  "111": {
    "id": "111",
    "title": "Página 111",
    "text": [
      "Tras aquella pesadilla viene el rescate; un barco pesquero te recoge y tienes que declarar ante el tribunal del vicealmirantazgo, pero disfrazas muy hábilmente tu demencial peripecia haciéndola pasar por un naufragio corriente. No podrás contar nada de este viaje al horror, o de lo contrario te tomarían por loco.",
      "Durante los próximos años escribirás tu propio relato y lo colocarás en una caja de latón junto al bajorrelieve y los papeles del profesor Angell. Este testimonio será la prueba de tu sano juicio, donde has reconstruido lo que esperas que nadie vuelva a reconstruir jamás.",
      "Has contemplado todo el horror que puede contener el universo, y después de eso incluso el cielo primaveral y las flores estivales serán puro veneno para ti.",
      "Sin embargo, no crees que tu vida vaya a prolongarse mucho. Igual que se fue tu tío, un día te irás tú. Sabes demasiado y el culto aún sobrevive. Cthulhu continúa también con vida, supones, de nuevo en aquel abismo de piedra que le había protegido desde que el sol era joven. Su maldita ciudad estará de nuevo sumergida, pero sus pastores en la Tierra todavía rugen y saltan y matan alrededor de monolitos rematados por ídolos en lugares solitarios. El Gran Cthulhu sin duda continúa soñando en el interior de su negro abismo, o de lo contrario el mundo estaría ahora mismo gritando de miedo y furia. ¿Quién sabe lo que sucederá al final? Lo que ha emergido puede hundirse, y lo que se ha hundido puede emerger de nuevo.",
      "La mayor de las blasfemias aguarda y sueña en las profundidades, y la decadencia se abre paso entre las tambaleantes ciudades de los hombres. El día llegará. ¡No quieres ni puedes pensarlo! Tan solo pides que, si no sobrevives, tus albaceas antepongan la prudencia a la audacia, y puedan asegurarse de que nadie más llegue a fijar su atención en este culto blasfemo e inmemorial.",
      "FIN"
    ],
    "choices": []
  }
};

export const getStoryNode = (id: string): StoryNode => {
  if (storyData[id]) {
    return storyData[id];
  }
  return {
    id: "error_page",
    title: "Página Perdida",
    text: [
      "Has llegado a una página que aún no ha sido transcrita. El horror cósmico impide continuar en esta dirección por ahora...",
      "Las páginas de este compendio oscuro se desvanecen ante tus ojos. Quizá sea un aviso para resguardar tu cordura.",
    ],
    choices: [
      { text: "Retroceder a la seguridad de la Introducción", toId: "intro" },
    ],
  };
};
