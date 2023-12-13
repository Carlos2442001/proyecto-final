import React from "react"
import { Footer } from "./Footer"
import JAVA from "../images/JAVA.jpg"

export const Java = () =>{
    return(
        <div className="container">
            <center>
            <h1>¿QUE ES JAVA?</h1>
            <h3>Java es un lenguaje de programación de alto nivel, orientado a objetos y multiplataforma. Fue desarrollado por Sun Microsystems (adquirida por Oracle Corporation en 2010) y lanzado por primera vez en 1995. Desde entonces, Java se ha convertido en uno de los lenguajes de programación más populares y ampliamente utilizados en el mundo.</h3>
            <img src={JAVA} className="d-block w-50" alt="" />
            <h1>CARACTERISTICA DE JAVA</h1>
            <h3>
            Orientación a Objetos: Java sigue un paradigma de programación orientada a objetos (OOP), lo que significa que todo en Java es un objeto. Los objetos son instancias de clases, y las clases definen la estructura y el comportamiento de los objetos.

Portabilidad: Una de las características más destacadas de Java es su capacidad para ser ejecutado en diversas plataformas sin modificaciones. Esto se logra mediante la máquina virtual de Java (JVM), que interpreta y ejecuta el código Java independientemente del sistema operativo subyacente.

Sintaxis Sencilla y Clara: Java fue diseñado para ser fácil de entender y utilizar. Su sintaxis se asemeja a la de otros lenguajes de programación como C++ y C#, lo que facilita la transición para los desarrolladores que ya están familiarizados con esos lenguajes.

Manejo Automático de Memoria: Java cuenta con un recolector de basura (garbage collector) que se encarga de gestionar automáticamente la memoria utilizada por el programa, liberando recursos que ya no son necesarios.

Amplia Biblioteca Estándar: Java viene con una extensa biblioteca estándar (Java Standard Edition API) que proporciona funciones para tareas comunes, como manipulación de cadenas, entrada/salida, redes, gráficos, seguridad, entre otros.

Seguridad: Java ha incorporado características de seguridad desde sus primeras versiones. La ejecución de código en la JVM se realiza en un entorno sandbox que limita el acceso a recursos críticos del sistema.

Desarrollo Empresarial: Java se ha utilizado ampliamente en el desarrollo de aplicaciones empresariales y sistemas de gran envergadura. Las tecnologías como Java EE (Enterprise Edition) se centran en la creación de aplicaciones empresariales robustas y escalables.
            </h3>
            </center>
            <Footer/>
    
        </div>


    )
}