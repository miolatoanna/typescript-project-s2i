// PROGETTO TYPESCRIPT - start2impact - Anna Miolato
// CLiente Sunnee - brand di beachwear in plastica riciclata attento ai processi di produzione sostenibile
// Definizione delle classi che implementano le interfacce
var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        console.log("Il prodotto '".concat(this.tipo, "' con ID ").concat(this.id, " di taglia ").concat(this.taglia, " \u00E8 stato assegnato a ").concat(cliente.nome, " ").concat(cliente.cognome, "."));
        this.stato = 'assegnato';
    };
    return Prodotto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        console.log("".concat(this.nome, " ").concat(this.cognome, " ha ordinato il prodotto '").concat(prodotto.tipo, "' color ").concat(prodotto.colore, " e taglia ").concat(prodotto.taglia, "."));
    };
    return Cliente;
}());
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nomeProcesso, descrizione) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log("Il prodotto ".concat(prodotto.tipo, " con ID ").concat(prodotto.id, " \u00E8 stato aggiunto al processo di produzione ").concat(this.nomeProcesso, "."));
    };
    return ProcessoProduzione;
}());
// Instanze di oggetti prodotto, cliente e processi
// Creazione dei prodotti
var costume1 = new Prodotto('costume da bagno', 'cb1', 'M', 'blu', 'disponibile');
var pareo1 = new Prodotto('pareo', 'p20', 'Unica', 'verde', 'disponibile');
var cappello1K = new Prodotto('cappello', 'cap03Kids', 'Unica', 'rosso', 'esaurito');
// Creazione dei clienti
var cliente1 = new Cliente('Mario', 'Rossi', 'mario@email.com', 'Carta di credito');
var cliente2 = new Cliente('Laura', 'Bianchi', 'laura@email.com', 'PayPal');
var cliente3 = new Cliente('Elisa', 'Verdi', 'elisaverdi@email.com', 'Bonifico');
// Creazione dei processi di produzione
var processo1 = new ProcessoProduzione('Primario', 'Processo principale di produzione sostenibile di prodotti in plastica riciclata.');
var processo2 = new ProcessoProduzione('Secondario - Linea Kids', 'Processo secondario di produzione sostenibile di prodotti in plastica riciclata - linea bambini.');
// aggiunta prodotti, ordine prodotti, assegnazione prodotti,
processo1.aggiungiProdotto(costume1);
processo1.aggiungiProdotto(pareo1);
processo2.aggiungiProdotto(cappello1K);
cliente1.ordinaProdotto(costume1);
cliente2.ordinaProdotto(pareo1);
cappello1K.assegnaCliente(cliente3);
pareo1.assegnaCliente(cliente2);
