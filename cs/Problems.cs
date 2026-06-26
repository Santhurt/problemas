
public class Problems
{
    public static int CountVocals(string str)
    {
        char[] vocals = ['a', 'e', 'i', 'o', 'u'];
        return str.Aggregate(0, (count, ch) => vocals.Contains(ch) ? count + 1 : count);
    }

    public static string LongestPalindrome(string str)
    {
        for (int i = str.Length; i > 0; i--)
        {
            for (int start = 0; start <= str.Length - i; start++)
            {
                if (Problems.VerifyPalindrome(str, start, start + i))
                {
                    return str.Substring(start, i);
                }
            }
        }
        return "";

    }

    public static bool VerifyPalindrome(string str, int i, int j)
    {
        int start = i;
        int end = j - 1;

        while (start < end)
        {
            if (str[start] != str[end])
            {
                return false;
            }

            start++;
            end--;
        }
        Console.WriteLine(str);
        return true;
    }
    public static Dictionary<char, int> CountRepeated(string str)
    {
        Dictionary<char, int> map = new Dictionary<char, int>();

        for (int i = 0; i < str.Length; i++)
        {
            if (map.ContainsKey(str[i]))
            {
                map[str[i]]++;
            }
            else
            {
                map[str[i]] = 1;
            }
        }

        return map;
    }


}
