export class Courses{
    public titulo: string;
    public nivel: string;
    public profesor: string;
    public activo: boolean;
    public horas: number;

    constructor( titulo, nivel, profesor, activo, horas){
        this.titulo = titulo;
        this.nivel = nivel;
        this.profesor = profesor;
        this.activo = activo;
        this.horas = horas
    }
}
