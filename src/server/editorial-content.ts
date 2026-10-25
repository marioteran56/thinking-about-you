/**
 * ARCHIVO EXCLUSIVO DEL SERVIDOR — CONTENIDO EDITORIAL PRIVADO
 * ============================================================================
 * Este módulo contiene la carta privada y el mapa de dedicatorias por canción.
 * NUNCA debe importarse desde `src/client/*` ni exponerse en archivos estáticos.
 * Solo se entrega a través de `GET /api/mixtape` tras verificar una sesión válida.
 *
 * CÓMO ACTUALIZAR LA LISTA DE CANCIONES DE LA PLAYLIST (PROCESO MANUAL SIN LLAVES):
 * Ejecuta en tu terminal:
 *   npm run sync:playlist
 * Esto actualiza `src/server/playlist-catalog.json` respetando el orden actual de la
 * playlist en Spotify y descargando las portadas nuevas, SIN sobrescribir ninguna de
 * tus dedicatorias en `EDITORIAL_TRACK_ENTRIES`.
 */

import type {
  EditorialEntry,
  PrivateLetterContent,
  SpotifyTrackMetadata,
} from '../shared/types';
import rawCatalog from './playlist-catalog.json';

/**
 * ID de la playlist en el proyecto ("canciones que me hacen pensar en ti" — Mario Teran).
 */
export const DEFAULT_STITCH_PLAYLIST_ID = '0EJqoSBZPUYuKNj36TKNxt';

/**
 * Contenido de la carta de introducción y despedida.
 */
export const PRIVATE_LETTER_CONTENT: PrivateLetterContent = {
  badgeTop: 'UN DETALLE PARA TI',
  title: 'Un pequeño mixtape 📼',
  subtitle: 'Algunas canciones que me hacen recordarte y me gustaría dedicarte',
  stampLabel: 'PAR AVION',
  paragraphs: [
    'No quería enviarte solo un enlace de Spotify y fingir que eso era el detalle, ¿dónde está lo divertido en eso? Me pareció más lindo dedicarte esta carta, si es que se puede llamar así, donde cada una de estas canciones tiene un significado especial sobre ti dentro de mi cabeza.',
    'Escúchalas con calma cuando tengas tiempo, o bien, cuando me extrañes tan solo un poquito de lo mucho que te extraño yo a diario.',
    'Desde aquella cita supe que nos faltó tiempo aún para conocernos, y esta carta es mi manera de acortar esa distancia que hoy nos separa, mientras llega el día de volver a vernos.',
  ],
  signOffLabel: 'Con todo mi cariño',
  signature: 'Mario ♡',
  sideATitle: 'Mis dedicatorias',
  sideBTitle: '',
  closingBadge: 'Un último mensaje',
  closingTitle: 'Espero que te haya sacado más de una sonrisa',
  closingBody:
    'Esta es solo una pequeña muestra de las miles de canciones que me hacen pensar en ti de tantas maneras. Créeme que escucho de todo, así que sé que posiblemente algunas canciones no te gustaron, o puede que ninguna.\n\nEn fin, sé que las palabras no suenan igual a través de una pantalla, pero ojalá alcances a sentir en la música estos sentimientos que trato de expresar. Solo espero que cuando te diga estas palabras de frente, me regales esa sonrisa que tanto me gusta recordar.',
  closingHighlight: 'Cuento los días para que las escuchemos juntos.',
  flightNoteBadge: 'Ruta Chihuahua — Monterrey',
  flightNoteText:
    'Curiosamente, este mixtape dura más que un vuelo entre Chihuahua y Monterrey, así que ya tengo qué escuchar en el camino cuando vaya a verte.',
  replyUrl:
    'https://wa.me/526141902258?text=Escuch%C3%A9%20el%20mixtape%20y%20quer%C3%ADa%20decirte%20que...%F0%9F%AB%AA',
  replyLabel: 'Contactar al remitente',
  footerStamp: 'Hecho con amor y música',
  isDemoContent: false,
};

/**
 * Mapa editorial completo para las 30 canciones de la playlist final.
 * Se enlaza con `src/server/playlist-catalog.json` usando `trackId` y respeta
 * estrictamente el orden de la playlist (1 a 30).
 */
export const EDITORIAL_TRACK_ENTRIES: EditorialEntry[] = [
  // ==========================================================================
  // LADO A: CANCIONES 01 A 15
  // ==========================================================================

  // #01 — Ángel (Elefante)
  {
    trackId: '2rYjkYQWpn66nf5Ihk7SHJ',
    fallbackTitle: 'Ángel',
    fallbackArtists: 'Elefante',
    template: 'polaroid',
    side: 'A',
    washiLabel: 'Pista 01 • Apertura ♡',
    memoryTag: 'De mis canciones favoritas',
    noteTitle: 'UNA LINDA COINCIDENCIA',
    dedication:
      'Todavía no puedo creer cómo me encontré con un ángel esa noche. Apareciste en mi vida cuando menos lo esperaba, y aunque todavía no sé qué nos tenga preparado el destino, me alegra muchísimo que nuestros caminos se hayan cruzado.',
    isDemoContent: false,
  },

  // #02 — Patadas de Ahogado (LATIN MAFIA, HUMBE)
  {
    trackId: '4WefXOf8I4gMjdj2kBJgkl',
    fallbackTitle: 'Patadas de Ahogado',
    fallbackArtists: 'LATIN MAFIA, HUMBE',
    template: 'post-it',
    side: 'A',
    washiLabel: 'Track Destacado ♡',
    noteTitle: 'APAPÁCHAME LA VIDA ENTERA',
    dedication:
      'Contigo puedo sentirme vulnerable y a la vez tan fuerte. Te convertiste en alguien muy especial para mí, alguien con quien quiero intentarlo todo para que funcione, y aunque pueda parecer que estoy dando patadas de ahogado, haría todo por estar contigo.',
    footerTag: 'Apostarlo todo',
    isDemoContent: false,
  },

  // #03 — Just the Way You Are (Bruno Mars)
  {
    trackId: '7BqBn9nzAq8spo5e7cZ0dJ',
    fallbackTitle: 'Just the Way You Are',
    fallbackArtists: 'Bruno Mars',
    template: 'postcard',
    side: 'A',
    washiLabel: 'Correo Aéreo • Pista 03',
    memoryTag: 'Tal y como eres',
    noteTitle: 'SIN CAMBIARTE NADA',
    quote: '“She’s so beautiful, and I tell her every day.”',
    dedication:
      'Probablemente ya estás harta de que todos los días te diga una indirecta o te recalque lo hermosa que eres. Mientras no te canses de escucharlo, yo no me cansaré de decirlo.',
    footerTag: 'Pop Clásico',
    isDemoContent: false,
  },

  // #04 — Your Song (Elton John)
  {
    trackId: '38zsOOcu31XbbYj9BIPUF1',
    fallbackTitle: 'Your Song',
    fallbackArtists: 'Elton John',
    template: 'double-polaroid',
    side: 'A',
    memoryTag: 'Gracias por existir ♡',
    noteTitle: 'MI MEJOR REGALO',
    quote: '“My gift is my song, and this one’s for you.”',
    dedication:
      'Es una canción muy simple, pero a la vez muy bonita. No tengo grandes cosas que ofrecerte con esta distancia más que solo palabras, pero las cosas que hago por ti son solo para ti. Quiero que sepas lo importante que eres para mí y lo bonita que se siente mi vida cuando estás en ella.',
    footerTag: 'Clásico atemporal',
    isDemoContent: false,
  },

  // #05 — Girl Crush - Recorded at Metropolis Studios, London (Harry Styles)
  {
    trackId: '4YutJsNwBBInE8vemufpQ8',
    fallbackTitle: 'Girl Crush',
    fallbackArtists: 'Harry Styles',
    template: 'vinyl-sleeve',
    side: 'A',
    washiLabel: 'Spotify Singles',
    memoryTag: 'Acústico de medianoche',
    noteTitle: 'SIN DISIMULAR',
    dedication:
      'Creo que es bastante obvio lo que quiero decir con esta canción, con el título basta.',
    footerTag: 'Metropolis Studios Session',
    isDemoContent: false,
  },

  // #06 — Aprender A Quererte (Morat)
  {
    trackId: '3zNcn4BaVfKORyx3uDfruW',
    fallbackTitle: 'Aprender A Quererte',
    fallbackArtists: 'Morat',
    template: 'cassette',
    side: 'A',
    washiLabel: 'C-60 HIGH FIDELITY',
    memoryTag: 'Conocerte cada vez más',
    noteTitle: 'MI MATERIA FAVORITA',
    dedication:
      'Siempre estoy anotando las cosas que te gustan, quiero conocer tus sueños y descifrar lo que te hace sonreír. Quiero ver el mundo de la forma en que lo ves tú y entender cómo es que puedo llegar a ti.',
    footerTag: 'Folk Pop',
    isDemoContent: false,
  },

  // #07 — Quién Dice (Marcos Menchaca) — PISTA DESTACADA
  {
    trackId: '0vR9p1X1ZDbHPzVEgHfMm6',
    fallbackTitle: 'Quién Dice',
    fallbackArtists: 'Marcos Menchaca',
    template: 'double-polaroid',
    side: 'A',
    washiLabel: 'Pista Destacada • #07',
    featuredBadge: 'Una bonita coincidencia',
    memoryTag: 'Día 26',
    calloutText: '¿Sabías que nos conocimos un día 26?',
    noteTitle: 'QUIÉN DICE QUE NO PODEMOS',
    dedication:
      'A pesar de que la distancia solo intenta ponernos pretextos, quién dice que no podemos inventar nuestra propia historia. Me aferraré a esta idea de ti y apostaré todo por esta historia que apenas comienza.',
    footerTag: 'Indie Acústico',
    isDemoContent: false,
  },

  // #08 — this is what falling in love feels like (JVKE)
  {
    trackId: '2PWTZV5znjLtZC5T1EVJvL',
    fallbackTitle: 'this is what falling in love feels like',
    fallbackArtists: 'JVKE',
    template: 'post-it',
    side: 'A',
    washiLabel: 'Pista 08 • Dulce',
    memoryTag: 'Cursi pero necesario',
    noteTitle: 'ASÍ SE SIENTE',
    quote: '“I know I sound super cliché, but you make me feel some type of way...”',
    dedication:
      'Esta canción la incluyo por todas las veces que siento que lo que digo es un cliché, pero es que en verdad son las palabras correctas que encuentro para describir lo que siento por ti. Despiertas una emoción tan bonita que no me da pena sonar cursi si es para ti.',
    footerTag: 'So this is love...',
    isDemoContent: false,
  },

  // #09 — Somewhere Only We Know (Keane)
  {
    trackId: '0ll8uFnc0nANY35E0Lfxvg',
    fallbackTitle: 'Somewhere Only We Know',
    fallbackArtists: 'Keane',
    template: 'ticket',
    side: 'A',
    washiLabel: 'ADMIT ONE: MIXTAPE PASS',
    memoryTag: 'SEC: DEDICATORIA • ROW: 09',
    noteTitle: 'NUESTRO LUGAR',
    dedication:
      'Esta canción me hace pensar en todas las cosas que aún nos faltan por platicar. Me encantaría que construyamos nuestros propios recuerdos y encontrar, con el tiempo, un lugar especial para los dos.',
    footerTag: 'Piano Rock',
    isDemoContent: false,
  },

  // #10 — Can't Help Falling in Love (Elvis Presley)
  {
    trackId: '44AyOl4qVkzS48vBsbNXaC',
    fallbackTitle: "Can't Help Falling in Love",
    fallbackArtists: 'Elvis Presley',
    template: 'polaroid',
    side: 'A',
    washiLabel: 'Pista 10 • Inolvidable ♡',
    memoryTag: 'Un clásico de amor',
    noteTitle: 'INEVITABLE',
    quote: '“Wise men say only fools rush in, but I can’t help falling in love with you...”',
    dedication:
      'Mis amigos me dicen que no debería apresurarme haciendo este tipo de detalles, pero es que contigo no puedo evitarlo. No sé cómo frenar este sentimiento que solo crece cada día más y más.',
    isDemoContent: false,
  },

  // #11 — Entra en Mi Vida (Sin Bandera)
  {
    trackId: '2h0iSG7htO0V4IvuwbTBf3',
    fallbackTitle: 'Entra en Mi Vida',
    fallbackArtists: 'Sin Bandera',
    template: 'cassette',
    side: 'A',
    washiLabel: 'C-60 HIGH FIDELITY',
    memoryTag: 'Te abro la puerta',
    noteTitle: 'TE VOLVISTE MI ILUSIÓN',
    quote: '“Te comencé por extrañar, pero empecé a necesitarte luego...”',
    dedication:
      'El título de la canción ya dice más de la mitad de lo que te iba a escribir. En muy poco tiempo te volviste alguien tan especial para mí, te abrí la puerta sin pensarlo dos veces, y cada día me da más gusto haberlo hecho.',
    footerTag: 'Balada en Español',
    isDemoContent: false,
  },

  // #12 — Si No Estás (Íñigo Quintero)
  {
    trackId: '2HafqoJbgXdtjwCOvNEF14',
    fallbackTitle: 'Si No Estás',
    fallbackArtists: 'Íñigo Quintero',
    template: 'postcard',
    side: 'A',
    washiLabel: 'Nota Postal • Pista 12',
    memoryTag: 'Verte pronto',
    noteTitle: 'ACORTAR DISTANCIAS',
    dedication:
      'Es curioso cómo alguien que está a kilómetros de distancia puede sentirse tan presente en mi cabeza. Me encanta hablar contigo, escribirte, hacerte estos detalles, pero solo espero que llegue la hora de ese vuelo para llegar y hacerte sonreír teniéndote enfrente.',
    footerTag: 'Piano & Voz',
    isDemoContent: false,
  },

  // #13 — Vivir Sin Aire (Maná)
  {
    trackId: '3G9RQLOSjsXVUDyQSv2PQR',
    fallbackTitle: 'Vivir Sin Aire',
    fallbackArtists: 'Maná',
    template: 'cassette',
    side: 'A',
    washiLabel: 'CHAVORRUCO',
    noteTitle: 'EN MI CABEZA',
    dedication:
      'Te has metido tanto en mi vida últimamente que gran parte del día lo único que hago es pensar en ti. Cómo me gustaría que no fuera tan difícil extrañarte.',
    footerTag: 'Vivir sin ti',
    isDemoContent: false,
  },

  // #14 — stupid song (Olivia Rodrigo)
  {
    trackId: '4LfCY65LvojKjWEnU7fNN4',
    fallbackTitle: 'stupid song',
    fallbackArtists: 'Olivia Rodrigo',
    template: 'double-polaroid',
    side: 'A',
    memoryTag: 'Confesión honesta',
    noteTitle: 'DIFÍCIL DE EXPLICAR',
    quote: '“You should feel how I feel when somebody says your name.”',
    dedication:
      'A pesar de que ande diciendo tantas cosas atrevidas o cursis detrás de estas canciones, la verdad es que me cuesta mucho explicar todo lo que siento por ti en estos momentos y lo emocionado que me pongo cada vez que alguien menciona tu nombre.',
    footerTag: 'Indie Pop',
    isDemoContent: false,
  },

  // #15 — She's The One (Robbie Williams)
  {
    trackId: '4lO57zZGFcj7vSY4QhfVDq',
    fallbackTitle: "She's The One",
    fallbackArtists: 'Robbie Williams',
    template: 'vinyl-sleeve',
    side: 'A',
    washiLabel: 'Edición Especial • #15',
    memoryTag: 'Sin ninguna duda',
    noteTitle: 'LA INDICADA',
    quote: '“If there’s somebody calling me home, she’s the one...”',
    dedication:
      'Desde que te conocí empecé a sonreírle a la vida. Hay personas con las que tienes que fingir y personas con las que simplemente puedes ser tú. Contigo encontré esa tranquilidad desde el primer minuto.',
    footerTag: 'Britpop Classic',
    isDemoContent: false,
  },

  // ==========================================================================
  // LADO B: CANCIONES 16 A 30
  // ==========================================================================

  // #16 — Pensando en Ti (LÚA) — APERTURA LADO B
  {
    trackId: '7erD8TKGNjHhNDqKAkEhMI',
    fallbackTitle: 'Pensando en Ti',
    fallbackArtists: 'LÚA',
    template: 'polaroid',
    side: 'B',
    washiLabel: 'Lado B • Pista 16',
    memoryTag: '24/7',
    noteTitle: 'DESDE AQUELLA VEZ',
    quote: '“Dime cómo le hiciste para entrar en mí...”',
    dedication:
      'Esta canción resume el porqué de este detalle. No he sido muy bueno en esto del amor, pero sé que esta vez haré mi mayor esfuerzo para demostrarte que puedo ser muy lindo, romántico, cursi, atrevido, alegre, incluso hasta un tonto, y todo para que te fijes en mí, y, mejor aún, me escojas a mí.',
    footerTag: 'Acústico / Indie Pop',
    isDemoContent: false,
  },

  // #17 — like my father (Jax) — MENCIÓN ESPECIAL
  {
    trackId: '5YVmHTAsdWnoanWXB7AwZX',
    fallbackTitle: 'like my father',
    fallbackArtists: 'Jax',
    template: 'honorable-mention',
    side: 'B',
    washiLabel: 'Mención Especial ★',
    memoryTag: 'Tu estándar del amor',
    noteTitle: '¿Por qué es mención honorífica?',
    quote: '“And dirty little notes in Post-Its...”',
    dedication:
      'Incluyo esta canción por dos motivos. Recuerdo que la compartiste en tus notas y de ahí saqué la idea de mandarte los Post-its, y claro, esta canción tiene muchas notas sobre lo que buscas y valoras en alguien.',
    footerTag: 'Mención Especial • Pista #17',
    isDemoContent: false,
  },

  // #18 — Muerte En Hawaii (Calle 13)
  {
    trackId: '3kNVYo6BJE9AENxzokM9YC',
    fallbackTitle: 'Muerte En Hawaii',
    fallbackArtists: 'Calle 13',
    template: 'ticket',
    side: 'B',
    washiLabel: 'ADMIT TWO: CREATIVIDAD',
    memoryTag: 'SEC: CREATIVIDAD • ROW: 18',
    noteTitle: 'HASTA LO IMPOSIBLE',
    quote: '“Soy todo lo que soy porque tú eres todo lo que quiero...”',
    dedication:
      'Si te preguntabas de dónde puedo sacar tantas ocurrencias o palabras para decirte lo mucho que me importas o lo hermosa que eres, las saco de canciones como esta. Por ti haría lo imposible, por ti baby, sería Batman...',
    footerTag: 'Aventura / Alternativo',
    isDemoContent: false,
  },

  // #19 — Perfect (One Direction)
  {
    trackId: '3NLnwwAQbbFKcEcV8hDItk',
    fallbackTitle: 'Perfect',
    fallbackArtists: 'One Direction',
    template: 'vinyl-sleeve',
    side: 'B',
    washiLabel: 'Edición Vinilo • #19',
    memoryTag: 'Quiero ser esa persona',
    noteTitle: 'SIMPLEMENTE PERFECTA',
    quote: '“If you like having secret little rendezvous, baby, you’re perfect...”',
    dedication:
      'Digo, sí puedo ser aquel que te dé flores y te haga detalles, pero también puedo ser ese cómplice para escaparnos y hacer las cosas que nos den esa adrenalina que a veces necesitamos para sentirnos vivos. Contigo hasta el plan más improvisado se vuelve el mejor plan del mundo.',
    footerTag: 'Pop Rock',
    isDemoContent: false,
  },

  // #20 — Lover (Taylor Swift)
  {
    trackId: '1dGr1c8CrMLDpV6mPbImSI',
    fallbackTitle: 'Lover',
    fallbackArtists: 'Taylor Swift',
    template: 'double-polaroid',
    side: 'B',
    washiLabel: 'Pista 20 • Romántico',
    memoryTag: 'Compañera de vida',
    noteTitle: 'A DONDE VAYAS',
    quote: '“Can I go where you go? Can we always be this close forever and ever?”',
    dedication:
      'Apenas estamos escribiendo el inicio de esta historia, pero qué ganas tengo de poder acompañarte en cada paso y vivir nuevas aventuras juntos.',
    footerTag: 'Pop Romántico',
    isDemoContent: false,
  },

  // #21 — Andar Conmigo (Julieta Venegas)
  {
    trackId: '05iMQqncVBIm4AE26EvaTL',
    fallbackTitle: 'Andar Conmigo',
    fallbackArtists: 'Julieta Venegas',
    template: 'post-it',
    side: 'B',
    noteTitle: 'SIN PRISAS',
    memoryTag: 'Hay tanto que quiero saber de ti',
    dedication:
      'Es pregunta... bueno no, pero hay tanto que me falta conocer de ti, todas tus historias y tus experiencias. No hay nada que disfrute más que escucharte hablar de lo que te gusta.',
    footerTag: 'Pop Alternativo',
    isDemoContent: false,
  },

  // #22 — Yo No Sé Mañana (Luis Enrique)
  {
    trackId: '54uBpRpdpMx96JAk1OyHez',
    fallbackTitle: 'Yo No Sé Mañana',
    fallbackArtists: 'Luis Enrique',
    template: 'cassette',
    side: 'B',
    washiLabel: 'ALGO QUE ME GUSTARÍA BAILAR CONTIGO',
    noteTitle: 'EL PRESENTE ES NUESTRO',
    dedication:
      'Sé que es una canción muy alegre, pero si escuchas bien qué dice, sabes que es una carta de amor. Porque más allá de lo que el futuro tenga preparado, solo vale la pena disfrutar el presente y si es contigo, mejor.',
    footerTag: 'Hoy importas tú',
    isDemoContent: false,
  },

  // #23 — Sparks (Coldplay)
  {
    trackId: '7D0RhFcb3CrfPuTJ0obrod',
    fallbackTitle: 'Sparks',
    fallbackArtists: 'Coldplay',
    template: 'double-polaroid',
    side: 'B',
    memoryTag: 'Atmósfera chill',
    noteTitle: 'UNA CHISPA DISTINTA',
    quote: '“Yeah, I saw sparks...”',
    dedication:
      'Prometo que siempre haré todo lo que esté a mi alcance para hacerte sentir querida.',
    footerTag: 'Selección Acústica',
    isDemoContent: false,
  },

  // #24 — No Hay Nadie Más (Sebastian Yatra)
  {
    trackId: '3IPJg1sdqLj12kFIndaonN',
    fallbackTitle: 'No Hay Nadie Más',
    fallbackArtists: 'Sebastian Yatra',
    template: 'postcard',
    side: 'B',
    washiLabel: 'Inigualable • Pista 24',
    memoryTag: 'No hay nada como ella',
    noteTitle: 'NADIE MÁS',
    quote: '“Porque a su lado todo tiene más razón...”',
    dedication:
      'Una canción un poco de más de romántica, pero describe muy bien lo que siento por ti. Eres tan única, tan bella, tan linda y tan especial. Aunque existan tantas razones por las que debería darme por vencido, por ti vale la pena luchar cada día.',
    footerTag: 'Balada Pop',
    isDemoContent: false,
  },

  // #25 — Volare (Danny Ocean)
  {
    trackId: '7nE9H4e4uPOis5sJY39fOc',
    fallbackTitle: 'Volare',
    fallbackArtists: 'Danny Ocean',
    template: 'ticket',
    side: 'B',
    washiLabel: 'BOARDING PASS • VUELO 25',
    memoryTag: 'SEC: NUBES • ROW: 25',
    dedication:
      'Desconozco qué nos tiene preparado el destino. Solo sé que me haces muy feliz, me haces hacer tantas cursilerías, me haces sentir vulnerable y a veces me haces actuar como un niño. Sea lo que sea que nos espere, sé que quiero hacer tantas cosas contigo y esa es mi motivación a diario. Espero verte pronto.',
    footerTag: 'Volando alto',
    isDemoContent: false,
  },

  // #26 — Aqui Estoy Yo (Luis Fonsi, Aleks Syntek, Noel Schajris, David Bisbal)
  {
    trackId: '4go2M6us50x9TQ1NvsB4vt',
    fallbackTitle: 'Aqui Estoy Yo',
    fallbackArtists: 'Luis Fonsi, Aleks Syntek, Noel Schajris, David Bisbal',
    template: 'double-polaroid',
    side: 'B',
    memoryTag: 'Cuenta conmigo siempre',
    noteTitle: 'SIEMPRE CERCA',
    quote: '“Quiero ser yo el que despierte en ti un nuevo sentimiento...”',
    dedication:
      'Si algún día necesitas a alguien que te escuche, alguien que te aconseje, alguien que te haga reír, alguien que te quiera, alguien que te cuide, recuerda que aquí estoy yo.',
    footerTag: 'Cuarteto Clásico',
    isDemoContent: false,
  },

  // #27 — Te quiero (Hombres G)
  {
    trackId: '5ULNuAoAozLAc721tRcPbX',
    fallbackTitle: 'Te quiero',
    fallbackArtists: 'Hombres G',
    template: 'polaroid',
    side: 'B',
    washiLabel: 'Pista 27 • Clásico en español',
    memoryTag: 'Dame tu mano',
    noteTitle: 'SIN TANTOS RODEOS',
    dedication:
      'Digo, el solo título ya plasma lo que quería decir. No sé qué hiciste que no te puedo sacar de mi cabeza, y lo único que hago es pensar en que te quiero.',
    isDemoContent: false,
  },

  // #28 — Bajo El Agua (Manuel Medrano)
  {
    trackId: '5QSYWruQQ7kBCHScI4xJ9g',
    fallbackTitle: 'Bajo El Agua',
    fallbackArtists: 'Manuel Medrano',
    template: 'cassette',
    side: 'B',
    washiLabel: 'C-60 HIGH FIDELITY',
    noteTitle: 'A FUEGO LENTO',
    dedication:
      'Me gustaría recorrer un camino juntos. Un camino donde todos estos intentos de conquistarte hayan valido la pena, un camino donde cada mensaje lindo que te he mandado haya sembrado una flor que florece con cada sonrisa que nace de ti, un camino en donde ambos terminemos juntos.',
    footerTag: 'Encontremos ese camino',
    isDemoContent: false,
  },

  // #29 — Eres Tú (Matisse, Reik)
  {
    trackId: '3iVu49ZmRHsCdRA0RTGUkP',
    fallbackTitle: 'Eres Tú',
    fallbackArtists: 'Matisse, Reik',
    template: 'postcard',
    side: 'B',
    washiLabel: 'Nota Postal • Pista 29',
    memoryTag: 'En cualquier lugar',
    noteTitle: 'DESDE AQUELLA CITA',
    quote: '“Tengo ganas de tenerte siempre, de conocerte una y mil veces...”',
    dedication:
      'Conocerte ha sido un placer, hablar y saber de ti se ha vuelto una de mis cosas favoritas. Si pudiera volver en el tiempo, volvería siempre a esa primera cita, a esa cita que me hizo darme cuenta de que lo único que quiero eres tú.',
    footerTag: 'Pop Acústico',
    isDemoContent: false,
  },

  // #30 — CIERRE ESPECIAL DEL MIXTAPE (Rascal Flatts — Bless The Broken Road)
  {
    trackId: '4YjjNHtEsTX6Af4mCTupT5',
    fallbackTitle: 'Bless The Broken Road',
    fallbackArtists: 'Rascal Flatts',
    template: 'collector',
    side: 'B',
    washiLabel: 'Pista Final #30 • Otra de mis favoritas',
    memoryTag: 'El camino que me llevó a conocerte',
    noteTitle: 'EL FINAL CORRECTO',
    quote: '“God blessed the broken road that led me straight to you...”',
    dedication:
      'Dejé esta canción para el final porque es otra de mis favoritas y tiene un gran significado para mí. A pesar de las veces en que me he sentido perdido, que no llego a ningún lado, Dios acomodó cada paso en mi camino para guiarme hasta el camino en el que te conocí.',
    footerTag: 'Todo el camino valió la pena',
    isDemoContent: false,
  },
];

/**
 * Catálogo sincronizado manualmente mediante `npm run sync:playlist` (`src/server/playlist-catalog.json`).
 * Mantiene el orden exacto de las canciones en la playlist de Spotify y sus portadas oficiales,
 * sin necesidad de configurar llaves ni variables de entorno de Spotify.
 */
export const SYNCED_PLAYLIST_CATALOG: {
  playlistId: string;
  playlistName: string;
  playlistUrl: string;
  ownerName: string;
  syncedAt: string;
  tracks: SpotifyTrackMetadata[];
} = {
  playlistId: rawCatalog.playlistId || DEFAULT_STITCH_PLAYLIST_ID,
  playlistName: rawCatalog.playlistName || 'canciones que me hacen pensar en ti',
  playlistUrl:
    rawCatalog.playlistUrl || `https://open.spotify.com/playlist/${DEFAULT_STITCH_PLAYLIST_ID}`,
  ownerName: rawCatalog.ownerName || 'Mario Teran',
  syncedAt: rawCatalog.syncedAt || new Date().toISOString(),
  tracks: rawCatalog.tracks as SpotifyTrackMetadata[],
};

export const DEMO_SPOTIFY_PLAYLIST_FIXTURE = SYNCED_PLAYLIST_CATALOG;
