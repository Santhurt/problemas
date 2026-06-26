from problems import countVocals, longestPalindrome, minimumString
problem = input("seleccione el problema: \n countVocals : 1\n")

if problem == "1":
    string = input("ingrese una cadena")
    print(f"La cantidad de vocales es: {countVocals(string)}")

if problem == "2":
    string = input("ingrese una cadena")
    print(f"El palindromo mas largo es: {longestPalindrome(string)}")

if problem == "3":
    string = input("ingrese una cadena")
    subtring = input("ingrese una subcadena")
    print(f"{minimumString(string, subtring)}")


