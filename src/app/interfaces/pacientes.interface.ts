export class Pacientes {
    public idpaciente: string;
    public nompaciente: string;
    public edadpaciente: string;
    public telpaciente: string;
    public dirpaciente: string;

    constructor( 
        idpaciente: string,
        nompaciente: string,
        edadpaciente: string,
        telpaciente: string,
        dirpaciente: string
    ) {
        this.idpaciente = idpaciente;
        this.nompaciente = nompaciente;
        this.edadpaciente = edadpaciente;
        this.telpaciente = telpaciente;
        this.dirpaciente = dirpaciente;
    }
}