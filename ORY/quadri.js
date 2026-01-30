// ============================================
// DATABASE QUADRI
// ============================================

const artworks = [
    // FIGURATIVO (ID 101-199)
    { id: 101, title: "Con la luce negli occhi", description: "Ritratto in bianco e nero, esplorazione dell'identità", year: "2024", genre: "figurativo", image: "paintings/conlalucenegliocchi.jpg" },
    { id: 102, title: "Momenti di danza", description: "Serie ritratti - focus sullo sguardo", year: "2023", genre: "figurativo", image: "paintings/momentididanza.jpg" },
    { id: 103, title: "Nuovo Caffe' dei Portici", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/nuovocaffedeiportici.jpg" },
    { id: 104, title: "Donna con maschera", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/donnaconmaschera.jpg" },
    { id: 105, title: "Occhi che ti guardano", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/occhichetiguardano.jpg" },
    { id: 106, title: "Silvia", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/silvia.jpg" },
    { id: 107, title: "Colosseo", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/colosseo.jpg" },
    { id: 108, title: "Andrea", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/andrea.jpg" },
    { id: 109, title: "Angelo", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/angelo.jpg" },
    { id: 110, title: "Anna", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/anna.jpg" },
    { id: 111, title: "Atmosfere romantiche", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/atmosfereromantiche.jpg" },
    { id: 112, title: "Ballerini", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/ballerini.jpg" },
    { id: 113, title: "Dedicato alla luna", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/dedicatoallaluna.jpg" },
    { id: 114, title: "Donna in riposo", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/donnainriposo.jpg" },
    { id: 115, title: "Emma", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/emma.jpg" },
    { id: 116, title: "Emozione", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/emozione.jpg" },
    { id: 117, title: "Guardando Te", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/guardandote.jpg" },
    { id: 118, title: "In viaggio", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/inviaggio.jpg" },
    { id: 119, title: "La città e l'uomo", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/lacittaeluomo.jpg" },
    { id: 120, title: "Marina", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/marina.jpg" },
    { id: 121, title: "Paola", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/paola.jpg" },
    { id: 122, title: "Passione", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/passione.jpg" },

    // Aggiungi altri quadri figurativi qui con ID 123, 124, 125...

    // PAESAGGISTICO (ID 201-299)
    { id: 201, title: "Occhio", description: "Paesaggio naturale con tecnica a spatola", year: "2024", genre: "paesaggistico", image: "paintings/occhio.jpg" },
    { id: 202, title: "Nel bosco", description: "Paesaggio boschivo con atmosfera onirica", year: "2023", genre: "paesaggistico", image: "paintings/nelbosco.jpg" },
    { id: 203, title: "Scogli e mare", description: "Marina con colori caldi del tramonto", year: "2023", genre: "paesaggistico", image: "paintings/scogliemare.jpg" },
    { id: 204, title: "I colori del bosco", description: "Acqua in movimento con tecnica dinamica", year: "2022", genre: "paesaggistico", image: "paintings/icoloridelbosco.jpg" },
    { id: 205, title: "Cascata delle Marmore", description: "Paesaggio urbano notturno", year: "2022", genre: "paesaggistico", image: "paintings/cascatadellemarmore.jpg" },
    { id: 206, title: "Il lago", description: "Paesaggio urbano notturno", year: "2022", genre: "paesaggistico", image: "paintings/illago.jpg" },
    { id: 207, title: "Lungo il fiume", description: "Paesaggio urbano notturno", year: "2022", genre: "paesaggistico", image: "paintings/lungoilfiume.jpg" },
    { id: 208, title: "I colori della natura", description: "Paesaggio urbano notturno", year: "2022", genre: "paesaggistico", image: "paintings/icoloridellanatura.jpg" },
    { id: 209, title: "Radici tra il passato", description: "Paesaggio urbano notturno", year: "2022", genre: "paesaggistico", image: "paintings/radicitrailpassato.jpg" },
    // Aggiungi altri paesaggi qui con ID 210, 211, 212...

    // ASTRATTO (ID 301-399)
    { id: 301, title: "Essenza Femminile", description: "Ritratto astratto con accenti viola", year: "2024", genre: "astratto", image: "paintings/essenzafemminile.jpg" },
    { id: 302, title: "Armonia Interiore", description: "Composizione astratta circolare", year: "2023", genre: "astratto", image: "paintings/armonainteriore.jpg" },
    // Aggiungi altri astratti qui con ID 303, 304, 305...

];

// ============================================
// CONFIGURAZIONE SLIDERS
// ============================================
const FEATURED_IDS = [101, 201, 107, 102, 202];
