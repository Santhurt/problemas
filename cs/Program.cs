// See https://aka.ms/new-console-template for more information


Console.WriteLine("Ingrese el problema:\n CountVocals: 1\n");
int problem = Convert.ToInt32(Console.ReadLine());
Execute execute = new Execute();

switch (problem)
{
    case 1:
        execute.CountVocals();
        break;

    case 2:
        execute.LongestPalindrome();
        break;

    case 3:
        execute.CountRepeated();
        break;

    default:
        Console.WriteLine("No se selecciono ningun problema");
        break;
}


