package Q2;

public class Nextbank {
    public static void main(String[] args) {
        Conta myNext = new Conta("Runnan", 13452);
        myNext.titular.sobrenome = "Vieira";
        myNext.titular.email = "Ruan@tynws.com.br";
        myNext.depositar(8000.0);
        myNext.sacar(900.0);
        System.out.println(myNext.dataAbertura);
    }
}
