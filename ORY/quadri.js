// ============================================
// DATABASE QUADRI
// ============================================

const artworks = [
    // FIGURATIVO (ID 101-199)
    { id: 101, title: "Con la luce negli occhi", description: "Ritratto in bianco e nero, esplorazione dell'identità", year: "2024", genre: "figurativo", image: "paintings/conlalucenegliocchi.jpg" },
    { id: 102, title: "Occhi dell'Anima", description: "Serie ritratti - focus sullo sguardo", year: "2023", genre: "figurativo", image: "paintings/opera2.jpg" },
    { id: 103, title: "Volto Nascosto", description: "Ritratto con elementi di mistero", year: "2022", genre: "figurativo", image: "paintings/opera3.jpg" },
    // Aggiungi altri quadri figurativi qui con ID 104, 105, 106...

    // PAESAGGISTICO (ID 201-299)
    { id: 201, title: "Occhio", description: "Paesaggio naturale con tecnica a spatola", year: "2024", genre: "paesaggistico", image: "paintings/occhio.jpg" },
    { id: 202, title: "Bosco Mistico", description: "Paesaggio boschivo con atmosfera onirica", year: "2023", genre: "paesaggistico", image: "paintings/opera5.jpg" },
    { id: 203, title: "Tramonto Mediterraneo", description: "Marina con colori caldi del tramonto", year: "2023", genre: "paesaggistico", image: "paintings/opera6.jpg" },
    { id: 204, title: "Cascata Vitale", description: "Acqua in movimento con tecnica dinamica", year: "2022", genre: "paesaggistico", image: "paintings/opera7.jpg" },
    { id: 205, title: "Silenzio Urbano", description: "Paesaggio urbano notturno", year: "2022", genre: "paesaggistico", image: "paintings/opera8.jpg" },
    // Aggiungi altri paesaggi qui con ID 206, 207, 208...

    // ASTRATTO (ID 301-399)
    { id: 301, title: "Essenza Femminile", description: "Ritratto astratto con accenti viola", year: "2024", genre: "astratto", image: "paintings/opera9.jpg" },
    { id: 302, title: "Armonia Interiore", description: "Composizione astratta circolare", year: "2023", genre: "astratto", image: "paintings/opera10.jpg" },
    // Aggiungi altri astratti qui con ID 303, 304, 305...

    // NATURA MORTA (ID 401-499)
    { id: 401, title: "Riflessioni d'Autunno", description: "Natura morta con toni caldi", year: "2024", genre: "natura-morta", image: "paintings/opera11.jpg" },
    { id: 402, title: "Primavera Risveglio", description: "Fiori e natura in esplosione di colori", year: "2022", genre: "natura-morta", image: "paintings/opera12.jpg" },
    // Aggiungi altre nature morte qui con ID 403, 404, 405...
];

// ============================================
// CONFIGURAZIONE SLIDER - Quali quadri mostrare
// ============================================
const FEATURED_IDS = [101, 201, 301, 102, 202, 401];
// Modifica questo array per cambiare i quadri nello slider
