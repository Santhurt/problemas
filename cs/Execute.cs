
public class Execute
{
    public void LongestPalindrome()
    {
        Console.WriteLine("Ingrese una cadena");
        string? str = Console.ReadLine();
        if (str == null) return;

        Console.WriteLine("El palindromo mas largo es: {0}", Problems.LongestPalindrome(str));

    }

    public void CountVocals()
    {

        Console.WriteLine("Ingrese una cadena");
        string? str = Console.ReadLine();

        if (str == null)
        {
            Console.WriteLine("Error: no se selecciono una cadena");
            return;
        }

        Console.WriteLine("La cantidad de vocales es: {0}", Problems.CountVocals(str));
    }

    public void CountRepeated()
    {
        Console.WriteLine("Ingrese una cadena");
        string? str = Console.ReadLine();

        if (str == null) return;
        Console.WriteLine("La distribucion de letras es: ");

        PrintMap(Problems.CountRepeated(str));

    }

    public void PrintMap<T, U>(Dictionary<T, U> map) where T : notnull
    {
        foreach (var pair in map)
        {
            Console.WriteLine($"{pair.Key}: {pair.Value}");
        }

    }

}
