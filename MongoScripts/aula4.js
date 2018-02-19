var ip_db   = process.env.ip_db;
c = new Mongo($ip_db);
db = c.getDB("dexter");

var filmes = db.filmes.initializeUnorderedBulkOp();

filmes.insert({"titulo":"O Planeta dos Macacos", "ano":"1968", "diretor":"Franklin J","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"2001 - Uma Odisseia no Espaço", "ano":"1968", "diretor":"Stanley Kubrick","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"John Carter: Entre Dois Mundos", "ano":"1968", "diretor":"Franklin J","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"O Senhor dos Aneis", "ano":"2001", "diretor":"Peter Jackson","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Cães de Aluguel", "ano":"1993", "diretor":"Quentin Tarantino","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Psicopata Americano", "ano":"2000", "diretor":"Mary Harron","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Interestelar", "ano":"2014", "diretor":"Christopher Nolan","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Transformers: The Last Knight", "ano":"2017", "diretor":"Michael Bay","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Os Mercenários", "ano":"2010", "diretor":"sylvester Stallone","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Kill Bill", "ano":"2003", "diretor":"Quentin Tarantino","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Planeta Terror", "ano":"2007", "diretor":"Robert Rodriguez","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"A Pele que Habito", "ano":"2011", "diretor":"Pedro Almodovar","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Um Drink no Inferno", "ano":"1996", "diretor":"Quentin Tarantino","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Pulp Fiction", "ano":"1995", "diretor":"Quentin Tarantino","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Django Livre", "ano":"2013", "diretor":"Quentin Tarantino","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"O Poderoso Chefão", "ano":"1972", "diretor":"Francis Ford Coppola","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Matrix", "ano":"1999", "diretor":"Andy Wachowski","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Medianeras", "ano":"2011", "diretor":"gustavo Taretto","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Os Oito Odiados", "ano":"2016", "diretor":"Quentin Tarantino","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Na Natureza Selvagem", "ano":"2008", "diretor":"Sean Penn","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Sobre Meninos e Lobos", "ano":"2003", "diretor":"Clint Eastwood","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Batman: O Cavaleiro das Trevas", "ano":"2008", "diretor":"Christopher Nolan","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Batman vs Superman: A Origem da Justiça", "ano":"2016", "diretor":"Zack Snyder","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"O predestinado", "ano":"2015", "diretor":"Michael Spierig","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e o Prisioneiro de Azkaban", "ano":"2004", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Animais Fantásticos e Onde Habitam", "ano":"2016", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e as Relíquias da Morte:Parte 2", "ano":"2011", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e a Câmara Secreta", "ano":"2002", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Alice no País das Maravilhas", "ano":"2010", "diretor":"Tim Burton","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e o Cálice de Fogo", "ano":"2005", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"A Lista de Schindler", "ano":"1993", "diretor":"Steven Spielberg","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e as Relíquias da Morte:Parte 1", "ano":"2010", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e a Pedra Filosofal", "ano":"2001", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Indiana Jones e a Última Cruzada", "ano":"1989", "diretor":"Steven Spielberg","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e o Enigma do Príncipe", "ano":"2009", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Band of Brothers", "ano":"2001", "diretor":"Steven Spielberg","avaliacao":{"bom":0,"medio":0,"ruim":0}})
filmes.insert({"titulo":"Harry Potter e a Ordem da Fênix", "ano":"2007", "diretor":"J.K. Rowling","avaliacao":{"bom":0,"medio":0,"ruim":0}})

filmes.execute()



