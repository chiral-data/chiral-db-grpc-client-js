import { ChiralDbClient } from './proto_generated_ts/Chiral_dbServiceClientPb'
import { RequestDescription, ReplyDescription } from './proto_generated_ts/chiral_db_pb'
import { RequestSimilarity, ReplySimilarity, Molecule } from './proto_generated_ts/chiral_db_pb'
import { RequestSubstructure, ReplySubstructure, Fragment } from './proto_generated_ts/chiral_db_pb'

class Client {
    channel: ChiralDbClient

    constructor(host: string, port: string) {
        this.channel = new ChiralDbClient(host + ":" + port)
    }

    get_description(): Promise<ReplyDescription> {
        return this.channel.getDescription(new RequestDescription(), {});
    }

    query_similarity(doc_name: string, smiles: string, cutoff: number): Promise<ReplySimilarity> {
        const mol = new Molecule();
        mol.setSmiles(smiles);
        const request = new RequestSimilarity();
        request.setDocName(doc_name);
        request.setMol(mol);
        request.setCutoff(cutoff);
        return this.channel.querySimilarity(request, {});
    }

    query_substructure(doc_name: string, smarts: string): Promise<ReplySubstructure> {
        const frag = new Fragment();
        frag.setSmarts(smarts);
        const request = new RequestSubstructure();
        request.setDocName(doc_name);
        request.setFrag(frag);
        return this.channel.querySubstructure(request, {});
    }
}

export { Client };