/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app;

import vista.JFLogin;
/**
 * Clase que va a ejecutar la apliacación como tal
 */
public class App {
    
    public static void main(String[] args) 
    {
        JFLogin fLogin = new JFLogin();
        fLogin.setVisible(true);
    }
    
}
