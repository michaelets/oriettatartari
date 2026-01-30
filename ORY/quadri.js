// ============================================
// DATABASE QUADRI
// ============================================

const artworks = [
    // FIGURATIVO (ID 101-199)
    { id: 101, title: "Con la luce negli occhi", description: "Ritratto in bianco e nero, esplorazione dell'identità", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/conlalucenegliocchi.jpg", status: "available" },
    { id: 102, title: "Momenti di danza", description: "Serie ritratti - focus sullo sguardo", dimensions: "60x80 cm", technique: "Acrilico su tela", genre: "figurativo", image: "paintings/momentididanza.jpg", status: "available" },
    { id: 103, title: "Nuovo Caffe' dei Portici", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/nuovocaffedeiportici.jpg", status: "private" },
    { id: 104, title: "Donna con maschera", description: "Ritratto con elementi di mistero", dimensions: "40x50 cm", technique: "Tecnica mista", genre: "figurativo", image: "paintings/donnaconmaschera.jpg", status: "available" },
    { id: 105, title: "Occhi che ti guardano", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/occhichetiguardano.jpg", status: "available" },
    { id: 106, title: "Silvia", description: "Ritratto con elementi di mistero", dimensions: "50x60 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/silvia.jpg", status: "private" },
    { id: 107, title: "Colosseo", description: "Ritratto con elementi di mistero", dimensions: "70x100 cm", technique: "Acrilico su tela", genre: "figurativo", image: "paintings/colosseo.jpg", status: "available" },
    { id: 108, title: "Andrea", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/andrea.jpg", status: "available" },
    { id: 109, title: "Angelo", description: "Ritratto con elementi di mistero", dimensions: "40x50 cm", technique: "Acrilico su tela", genre: "figurativo", image: "paintings/angelo.jpg", status: "available" },
    { id: 110, title: "Anna", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/anna.jpg", status: "available" },
    { id: 111, title: "Atmosfere romantiche", description: "Ritratto con elementi di mistero", dimensions: "60x80 cm", technique: "Tecnica mista", genre: "figurativo", image: "paintings/atmosfereromantiche.jpg", status: "available" },
    { id: 112, title: "Ballerini", description: "Ritratto con elementi di mistero", dimensions: "80x100 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/ballerini.jpg", status: "available" },
    { id: 113, title: "Dedicato alla luna", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Acrilico su tela", genre: "figurativo", image: "paintings/dedicatoallaluna.jpg", status: "available" },
    { id: 114, title: "Donna in riposo", description: "Ritratto con elementi di mistero", dimensions: "60x80 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/donnainriposo.jpg", status: "available" },
    { id: 115, title: "Emma", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/emma.jpg", status: "private" },
    { id: 116, title: "Emozione", description: "Ritratto con elementi di mistero", dimensions: "40x60 cm", technique: "Tecnica mista", genre: "figurativo", image: "paintings/emozione.jpg", status: "available" },
    { id: 117, title: "Guardando Te", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/guardandote.jpg", status: "available" },
    { id: 118, title: "In viaggio", description: "Ritratto con elementi di mistero", dimensions: "60x80 cm", technique: "Acrilico su tela", genre: "figurativo", image: "paintings/inviaggio.jpg", status: "available" },
    { id: 119, title: "La città e l'uomo", description: "Ritratto con elementi di mistero", dimensions: "70x90 cm", technique: "Tecnica mista", genre: "figurativo", image: "paintings/lacittaeluomo.jpg", status: "available" },
    { id: 120, title: "Marina", description: "Ritratto con elementi di mistero", dimensions: "50x70 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/marina.jpg", status: "available" },
    { id: 121, title: "Paola", description: "Ritratto con elementi di mistero", dimensions: "50x60 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/paola.jpg", status: "available" },
    { id: 122, title: "Passione", description: "Ritratto con elementi di mistero", dimensions: "80x100 cm", technique: "Olio su tela", genre: "figurativo", image: "paintings/passione.jpg", status: "available" },

    // PAESAGGISTICO (ID 201-299)
    { id: 201, title: "Occhio", description: "Paesaggio naturale con tecnica a spatola", dimensions: "60x80 cm", technique: "Spatola su tela", genre: "paesaggistico", image: "paintings/occhio.jpg", status: "available" },
    { id: 202, title: "Nel bosco", description: "Paesaggio boschivo con atmosfera onirica", dimensions: "70x90 cm", technique: "Olio su tela", genre: "paesaggistico", image: "paintings/nelbosco.jpg", status: "available" },
    { id: 203, title: "Scogli e mare", description: "Marina con colori caldi del tramonto", dimensions: "80x100 cm", technique: "Acrilico su tela", genre: "paesaggistico", image: "paintings/scogliemare.jpg", status: "private" },
    { id: 204, title: "I colori del bosco", description: "Acqua in movimento con tecnica dinamica", dimensions: "60x80 cm", technique: "Acrilico su tela", genre: "paesaggistico", image: "paintings/icoloridelbosco.jpg", status: "available" },
    { id: 205, title: "Cascata delle Marmore", description: "Paesaggio urbano notturno", dimensions: "70x100 cm", technique: "Spatola su tela", genre: "paesaggistico", image: "paintings/cascatadellemarmore.jpg", status: "available" },
    { id: 206, title: "Il lago", description: "Paesaggio urbano notturno", dimensions: "50x70 cm", technique: "Olio su tela", genre: "paesaggistico", image: "paintings/illago.jpg", status: "available" },
    { id: 207, title: "Lungo il fiume", description: "Paesaggio urbano notturno", dimensions: "60x80 cm", technique: "Acrilico su tela", genre: "paesaggistico", image: "paintings/lungoilfiume.jpg", status: "available" },
    { id: 208, title: "I colori della natura", description: "Paesaggio urbano notturno", dimensions: "70x90 cm", technique: "Tecnica mista", genre: "paesaggistico", image: "paintings/icoloridellanatura.jpg", status: "available" },
    { id: 209, title: "Radici tra il passato", description: "Paesaggio urbano notturno", dimensions: "60x80 cm", technique: "Olio su tela", genre: "paesaggistico", image: "paintings/radicitrailpassato.jpg", status: "available" },

    // ASTRATTO (ID 301-399)
    { id: 301, title: "Essenza Femminile", description: "Ritratto astratto con accenti viola", dimensions: "80x100 cm", technique: "Acrilico su tela", genre: "astratto", image: "paintings/essenzafemminile.jpg", status: "available" },
    { id: 302, title: "Armonia Interiore", description: "Composizione astratta circolare", dimensions: "90x90 cm", technique: "Tecnica mista", genre: "astratto", image: "paintings/armonainteriore.jpg", status: "available" },
];

// ============================================
// FUNZIONE HELPER PER STATUS BADGE
// ============================================
function getStatusBadge(status) {
    const badges = {
        'available': '<span class="artwork-status status-available">In Archivio</span>',
        'private': '<span class="artwork-status status-private">Collezione Privata</span>'
    };
    return badges[status] || '';
}

// ============================================
// CONFIGURAZIONE SLIDERS
// ============================================
const FEATURED_IDS = [101, 201, 107, 102, 202];
