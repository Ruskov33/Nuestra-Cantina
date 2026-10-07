#Generador de codigos alfanumericos
def generarcodigoalfanumerico(n): 
    caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return (
        caracteres[n // (36 * 36)] +
        caracteres[(n // 36) % 36] +
        caracteres[n % 36]
    )
#ESTO DE ACA ES TESTEO CON TODOS LOS POSIBLES, BORRAR Y HACCER CONEXION CON LA BASE DE DATOS
for n in range(46655):
    print(generarcodigoalfanumerico(n))