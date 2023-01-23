package Q2;

import java.text.*;
import java.util.*;

class Conta {
    public Double saldo = 0.0;
    public Cliente titular = new Cliente();
    public Integer numero;
    public String agencia;
    public String dataAbertura; 


    public Conta(String nome, Integer numero) {
        this.titular.nome = nome;
        this.numero = numero;
        this.dataAbertura = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
    }

    public Boolean sacar(Double valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            System.out.println("Saque efetuado -R$"+ valor);
            System.out.println("Saldo atual R$"+ this.saldo);
            return true;
        } else {
            System.out.println("Saldo insuficiente");
            System.out.println("Saldo atual R$"+ this.saldo);
        }
        return false;
    }

    public void depositar(Double valor) {
        if (valor <= 0) {
            System.out.println("Valor invalido");
        } else {
            this.saldo += valor;
            System.out.println("Deposito efetuado +R$"+valor);
            System.out.println("Saldo atual R$"+this.saldo);
        }
    }

    public Double rendimento(){ 
        return this.saldo * 0.1; 
    }
}