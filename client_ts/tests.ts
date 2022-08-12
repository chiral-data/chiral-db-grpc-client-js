import { Client } from './client'

class ClientTests {
    constructor(public client: Client) {}

    get_description(e: {}) {
        const self = this;
        self.client.get_description()
        .then((reply) => {
            const desc = reply.getDesc().replaceAll('\n', '<br>');
            $('#description_text').html(desc);
        })
    }

    query_similarity(e: {}) {
        const self = this;
        const doc_name = 'ChEMBL';
        const smiles = 'Cc1cc(NC(=O)c2cc(Cl)cc(Cl)c2O)ccc1Sc1nc2ccccc2s1';
        const cutoff = 0.3;
        self.client.query_similarity(doc_name, smiles, cutoff)
            .then((reply) => {
                const results_in_map = reply.getResultsMap();
                const results_in_string = results_in_map.toArray().reduce((pv, cv) => {
                    return pv + cv[0] + ' ' + cv[1] + '<br>';
                }, 'Similarity Searching in ' + doc_name + ' for SMILES ' + smiles + ' with cutoff ' + cutoff + '<br>')
                $('#similarity_text').html(results_in_string);
            });
    }

    query_substructure(e: {}) {
        const self = this;
        const doc_name = 'ChEMBL'; 
        const smarts = 'Sc1nc2ccccc2s1';
        self.client.query_substructure(doc_name, smarts)
            .then((reply) => {
                const results_in_string = reply.getResultsMap().toArray().reduce((pv, cv) => {
                    return pv + cv[0] + ' matched atom index: ' + cv[1] + '<br>';
                }, 'Substructure Searching in ' + doc_name + ' for SMARTS ' + smarts + '<br>');
                $('#substructure_text').html(results_in_string);
            })
    }

    load() {
        const self = this;
        $(document).ready(() => {
            $('#description_button').click(self.get_description.bind(self));
            $('#similarity_button').click(self.query_similarity.bind(self));
            $('#substructure_button').click(self.query_substructure.bind(self));
        });
    }
}

const client = new Client("http://demo.chiral.one", "8080");
const client_tests = new ClientTests(client);
client_tests.load();
