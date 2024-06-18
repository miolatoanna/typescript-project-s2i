// PROGETTO TYPESCRIPT - start2impact - Anna Miolato
// CLiente Sunnee - brand di beachwear in plastica riciclata attento ai processi di produzione sostenibile


// Definizione delle interfacce di prodotto, cliente, processo di produzione

interface IProdotto {
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    id: string;
    taglia: string;
    colore: string;
    stato: 'disponibile' | 'esaurito' | 'assegnato';

    assegnaCliente(cliente: ICliente): void;
}

interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;

    ordinaProdotto(prodotto: IProdotto): void;
}

interface IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    aggiungiProdotto(prodotto: IProdotto): void;
}


// Definizione delle classi che implementano le interfacce

class Prodotto implements IProdotto {
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    id: string;
    taglia: string;
    colore: string;
    stato: 'disponibile' | 'esaurito' | 'assegnato';

    constructor(tipo: 'costume da bagno' | 'pareo' | 'cappello', id: string, taglia: string, colore: string, stato: 'disponibile' | 'esaurito' | 'assegnato') {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }

    assegnaCliente(cliente: ICliente): void {
        console.log(`Il prodotto '${this.tipo}' con ID ${this.id} di taglia ${this.taglia} è stato assegnato a ${cliente.nome} ${cliente.cognome}.`);
        this.stato = 'assegnato';
    }
}

class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamentoPreferito: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }

    ordinaProdotto(prodotto: IProdotto): void {
        console.log(`${this.nome} ${this.cognome} ha ordinato il prodotto '${prodotto.tipo}' color ${prodotto.colore} e taglia ${prodotto.taglia}.`);
    }
}


class ProcessoProduzione implements IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    constructor(nomeProcesso: string, descrizione: string) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto);
        console.log(`Il prodotto ${prodotto.tipo} con ID ${prodotto.id} è stato aggiunto al processo di produzione ${this.nomeProcesso}.`);
    }
}


// Instanze di oggetti prodotto, cliente e processi

// Creazione dei prodotti
let costume1 = new Prodotto('costume da bagno', 'cb1', 'M', 'blu', 'disponibile');
let pareo1 = new Prodotto('pareo', 'p20', 'Unica', 'verde', 'disponibile');
let cappello1K = new Prodotto('cappello', 'cap03Kids', 'Unica', 'rosso', 'esaurito');

// Creazione dei clienti
let cliente1 = new Cliente('Mario', 'Rossi', 'mario@email.com', 'Carta di credito');
let cliente2 = new Cliente('Laura', 'Bianchi', 'laura@email.com', 'PayPal');
let cliente3 = new Cliente('Elisa', 'Verdi', 'elisaverdi@email.com', 'Bonifico');

// Creazione dei processi di produzione
let processo1 = new ProcessoProduzione('Primario', 'Processo principale di produzione sostenibile di prodotti in plastica riciclata.');
let processo2 = new ProcessoProduzione('Secondario - Linea Kids', 'Processo secondario di produzione sostenibile di prodotti in plastica riciclata - linea bambini.');


// aggiunta prodotti, ordine prodotti, assegnazione prodotti,

processo1.aggiungiProdotto(costume1);
processo1.aggiungiProdotto(pareo1);
processo2.aggiungiProdotto(cappello1K);

cliente1.ordinaProdotto(costume1);
cliente2.ordinaProdotto(pareo1);

cappello1K.assegnaCliente(cliente3);
pareo1.assegnaCliente(cliente2);
