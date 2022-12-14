package java.First;

public class Carro {
    public String cor;
    public String modelo;
    public Double kmH;
    public Boolean ligado;

    public Carro() {
        this.cor = "Branco";
        this.modelo = "Gol";
        this.kmH = 80.0;
        this.ligado = false;
    }

    public void ligar() {
        this.ligado = true;
    }
    
}
