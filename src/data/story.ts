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
        text: "Eso te brinda una oportunidad... (Avanzar)",
        toId: "interlude_1",
      },
    ],
  },
  interlude_1: {
    id: "interlude_1",
    text: [
      "Toda la estructura del barco tiembla con un fuerte sonido de maderas quebradas y metal retorcido.",
    ],
    choices: [{ text: "Navegas hasta el final, en la página 111", toId: "11" }],
    isInterlude: true,
    imageUrl:
      "https://media.istockphoto.com/id/528729338/es/foto/monster-y-antiguo-barco.jpg?s=1024x1024&w=is&k=20&c=U8qgxqPToIazAxTlJ58D963FHkiKRicJwRqlLlp3XJM=",
    nextPageId: "111",
  },
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
    ],
    choices: [
      {
        text: "Sientes como si estuvieras deslizándote por un sueño... (Avanzar)",
        toId: "interlude_2",
      },
    ],
  },
  interlude_2: {
    id: "interlude_2",
    text: [
      "Sientes como si estuvieras deslizándote por un sueño, persiguiendo un destino imposible. FIN",
    ],
    choices: [],
    isInterlude: true,
    imageUrl:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1779491573/la%20llamada/e94dbbac-be9b-4e12-991d-6d48caa3e63d.png",
    nextPageId: "intro",
  },
    "14": {
    id: "14",
    title: "Página 14",
    text: [
      "Entiendes que si Wilcox fue importante para el profesor Angell, también puede serlo para tu investigación. Consigues sacarlo del recinto y le invitas a pasar algunas noches en el cuarto de invitados de tu casa en Boston, donde crees que podréis hablar tranquilamente y, en el caso de que vuelva a tener esas pesadillas, sacar algo de ellas. Wilcox, desesperado y necesitado de cualquier tipo de ayuda que alivie su soledad, accede a acompañarte. ",
      "Durante el día, Henry se muestra tranquilo y hastacoherente, aunque notas que su estado nervioso es muyvolátil y que en cualquier momento puede tener una crisis.Accede a hablarte de sus encuentros con el profesor Angelly de las conversaciones que mantuvieron acerca del llamado«Culto de Cthulhu». ",
      "Esa misma noche, y tras una copiosa cena, el muchacho  empieza a revolverse en sueños. Te acercas a su cama con una libreta y un lápiz y empiezas a tomar nota de todas sus reacciones y de los extraños balbuceos que profiere",
      "Estás convencido de que, tal y como ocurrió cuando se entrevistaba con el profesor Angell, de sus pesadillas destilará alguna revelación importante… "
    ],
    choices: [
      {
        text: "Continúa apostado junto al lecho de Henry Wilcox, en la página 19 ",
         toId: "19",
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
  "56": {
    id: "56",
    title: "Página 56",
    text: [
      "Los recortes que ha compendiado tu tío abuelo son muy numerosos y, además, proceden de los lugares más remotos del mundo.",
      "Hay noticias sobre un hombre que se suicidó en Londres tras levantarse en plena noche y arrojarse a través de la ventana de su cuarto, al tiempo que profería un grito horroroso «¿FHTAGN?» Otro es un despacho proveniente de California, donde se relata que una colonia de teósofos se estaría preparando para cierto «glorioso acontecimiento» que está por venir. También hablan de una agitación sin precedentes en la India y de la multiplicación de orgías vudú en Haití.",
      "Todos los acontecimientos recopilados en los recortes tuvieron lugar entre primeros de marzo y primeros de abril de 1925.",
      "La clave para entender las investigaciones de tu tío podría estar en estos recortes. Si al final te decides a seguir los extraños portentos y señales que se plasman en ellos, es posible que tengas que visitar ciertos lugares y emprender algunos viajes…",
    ],
    choices: [
      {
        text: "Si aún no has analizado el extraño bajorrelieve de arcilla y te parece apropiado hacerlo ahora, ve a la página 32",
        toId: "32",
      },
      {
        text: "Si todavía no le has echado un vistazo al manuscrito que ha redactado el profesor Angell y quieres hacerlo, ve a la página 17",
        toId: "17",
      },
      {
        text: "Viaja a San Francisco —California— en busca de la comuna de teósofos, en la página 18",
        toId: "18",
      },
      {
        text: "Viaja a Nueva Orleans —Luisiana— en busca del inspector Legrasse, en la página 86",
        toId: "86",
      },
    ],
  },
  "18": {
    id: "18",
    title: "Página 18",
    text: [
      "Desembarcas en San Francisco, convencido de estar siguiendo la pista correcta.",
      "Según los apuntes del profesor Angell, la comuna de teósofos tiene su residencia en un lugar llamado San Juan Bautista, una pequeña ciudad del condado de San Benito. Hay allí una misión, bajo la tutela de un tal padre Juárez, sobre la que se han extendido oscuros rumores por las cercanías. Los parroquianos hablan de cultos inconfesables y extraños monjes que adoran a dioses impíos.",
      "No te cuesta mucho trabajo dar con la misión después de preguntar a algunos de los lugareños. Se trata de una iglesia mal encalada y de aspecto ascético y frugal.",
    ],
    choices: [
      { text: "Entrevístate con el padre Juárez en la página 41", toId: "41" },
    ],
  },
  "86": {
    id: "86",
    title: "Página 86",
    text: [
      "No te es complicado concertar una entrevista con el inspector Legrasse.",
      "En su despacho huele a tabaco y toda la estancia está sumida en la penumbra, una semioscuridad viciada por el intenso calor de Nueva Orleans.",
      "El inspector John Raymond Legrasse resulta ser un hombre franco y agradable, y notas que empatiza de inmediato con tus preocupaciones acerca de la muerte de tu tío abuelo.",
      "—Debo haberle confundido con otro. — Responde, pero no deja de examinarte de arriba abajo.— Déjeme contarle una historia.",
    ],
    choices: [
      {
        text: "Escucha la narración del inspector Legrasse en la página 67",
        toId: "67",
      },
    ],
  },
  "67": {
    id: "67",
    title: "Página 67",
    text: [
      "—Hace un par de años, cuando todo este asunto eclosionó —dice Legrasse—, tuve oportunidad de conocer a un tipo llamado Johansen. Gustaf Johansen. Se trataba de un marinero noruego que, casi sin quererlo, fue a parar a esa maldita isla… R’lyeh. Yo seguía buscando información acerca del «Culto de Cthulhu».",
      "Miras al comisario con una expresión que él interpreta como interrogativa, y casi enseguida continua con su monólogo:",
      "—Créame, viajé a Oslo y localicé a Johansen. Cuando me entrevisté con él, estaba redactando su historia en un manuscrito. Le recomiendo que vaya a verle. Le aseguro que lo que ese pobre hombre vio, arrojará mucha más luz sobre este misterio. En esta zona ya no encontrará nada más.",
      "Dicho esto, Legrasse se pone de pie y te estrecha la mano. Casi a trompicones sales de su despacho, un tanto desconcertado…, pero con un papel en el que consta la dirección del tal Johansen en Oslo.",
    ],
    choices: [
      {
        text: "Si decides viajar a Noruega y entrevistarte con Johansen, hazlo en la página 89",
        toId: "89",
      },
      {
        text: "Si crees que nada encontrarás allí y aún no has visitado al hijo del profesor Webb en Londres, ve a la página 78",
        toId: "78",
      },
    ],
  },
  "89": {
    id: "89",
    title: "Página 89",
    text: [
      "La entrevista con Legrasse te ha abierto una nueva vía de investigación. Esa misma tarde, y motivado por sus palabras y su relato a medias, coges un buque que parte desde el mismo puerto de Nueva Orleans rumbo a Europa.",
      "La travesía es larga y tediosa, pero finalmente llegas a Suecia y, tras los debidos enlaces, a la capital de Noruega y hasta el hogar del mismísimo Johansen. Golpeas la puerta de su casa y te atiende su mujer.",
      "Tras presentarte, ella te invita a pasar, aliviada de poder compartir con alguien el temor que la atenaza.",
      "—Mucho me temo que Gustaf ha muerto en extrañas circunstancias —dice—. Un contenedor de viejos periódicos le ha caído en la cabeza mientras cruzaba un callejón en el puerto. No obstante, el manuscrito sigue aquí.",
      "La mujer de Johansen deposita la taza de té de la que bebe sobre la mesa, temblando visiblemente, y te cede muy amablemente un grueso fajo de papeles atados por un cordel de esparto.",
      "Una vez a bordo del barco que te lleva de regreso a casa, te preguntas qué tan espeluznante puede ser la historia que narra Johansen en aquellas páginas…",
    ],
    choices: [
      {
        text: "Enfréntate al manuscrito de Johansen en la página 99",
        toId: "99",
      },
    ],
  },
  "99": {
    id: "99",
    title: "Página 99",
    text: [
      "Estás de nuevo en Boston, en la confortable sala de lectura de tu hogar. Has hecho una enorme travesía de ida y vuelta a Oslo y lo único que has conseguido traer de allí es un manuscrito arrugado del tal Gustaf Johansen, el marinero noruego que, según palabras de Legrasse, habría estado en la mismísima R’lyeh.",
      "Hay algo siniestro, algo oscuro en el manuscrito y, por algún motivo, dudas de si deberías leerlo o no. El pobre Johansen no acabó bien, al igual que el profesor Angell.",
      "¿Estás dispuesto a recorrer el mismo camino que llevó tu tío abuelo? ¿Es escuchar la llamada de este ser, Cthulhu, un modo de ganarse un final atroz? ¿O son todo supercherías?",
    ],
    choices: [
      {
        text: "Si decides leer de todas maneras el manuscrito, hazlo en la página 2",
        toId: "2",
      },
      {
        text: "Si decides arrojarlo al fuego y abandonar para siempre esta investigación, enciende una hoguera de justicia en la página 11",
        toId: "11",
      },
    ],
  },

  "77": {
    id: "77",
    title: "Página 77",
    text: [
      "Al despertar, estás encerrado en una habitación de paredes blancas y tienes los brazos aprisionados por la acción de una camisa de mangas desproporcionadas, firmemente amarradas a tu espalda. Te encuentras aturdido y confuso por las medicinas, pero con la vaga sensación de haber contemplado un abismo de locura total.",
      "Recibes visitas periódicas de médicos y enfermeros que te hacen preguntas, buscando la forma de entender cómo funciona tu psique despedazada. Tus respuestas son monotemáticas y se repiten en un ciclo eterno: el «Culto de Cthulhu», los Dioses Primigenios, la sumergida ciudad de R’lyeh, y un blasfemo e impronunciable salmo que ninguno de los seres cuerdos que te visita es capaz de enunciar sin acabar siendo tu compañero de celda: Ph’nglui mglw’nafh Cthulhu R’lyeh wgah’nagl fhtagn.",
      "Por desgracia, parece que pasarás el resto de tu vida entre estos muros acolchados, y aunque imploras ayuda a gritos, por las noches, invariablemente, acude a ti en sueños la figura de un enorme dragón con cabeza de calamar y alas rudimentarias para susurrarte secretos blasfemos.",
      "Lo siento, pero ningún tratamiento será capaz de acallar tus gritos desesperados.",
      "FIN",
    ],
    choices: [],
  },
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
