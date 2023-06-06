// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// FibList(20);

FibList2(20);
void FibList2(int index)
{
    if ((index == 1) || (index == 2))
    {
        Console.WriteLine("1");
    }
    int a = 1, b = 1;
    for (int i = 3; i <= index; i++)
    {
        b = a + b;
        a = b - a;
        Console.WriteLine($"The {i} number of FibList is {b}.");
    }
}

int FibList(int i)
{
    // if (i == 0)
    // {
    //     return 0;
    // }
    if ((i == 1) || (i == 2))
    {
        Console.WriteLine();
        Console.WriteLine("1");
        return 1;
    }
    int result = FibList(i - 1) + FibList(i - 2);
    Console.WriteLine(result);
    return result;

}

// var fibonacciNumbers = new List<int> {1, 1};
// var previous = fibonacciNumbers[fibonacciNumbers.Count - 1];
// var previous2 = fibonacciNumbers[fibonacciNumbers.Count - 2];

// fibonacciNumbers.Add(previous + previous2);

// foreach (var item in fibonacciNumbers)
// {
//     Console.WriteLine(item);
// }

void WorkWithStrings()
{
    var names = new List<string> { "Decee", "Ana", "Felipe" };
    foreach (var name in names)
    {
        Console.WriteLine($"Hello {name.ToUpper()}!");
    }
    Console.WriteLine();
    names.Add("Maria");
    names.Add("Bill");
    names.Remove("Ana");
    foreach (var name in names)
    {
        Console.WriteLine($"Hello {name.ToUpper()}!");
    }
    Console.WriteLine();
    Console.WriteLine($"My name is {names[0]}");
    Console.WriteLine($"I've added {names[2]} and {names[3]} to the list");
    Console.WriteLine($"The list has {names.Count} people in it");

    var index = names.IndexOf("Felipe");
    if (index == -1)
    {
        Console.WriteLine($"When an item is not found, IndexOf returns {index}");
    }
    else
    {
        Console.WriteLine($"The name {names[index]} is at index {index}");
    }
    index = names.IndexOf("Not Found");
    if (index == -1)
    {
        Console.WriteLine($"When an item is not found, IndexOf returns {index}");
    }
    else
    {
        Console.WriteLine($"The name {names[index]} is at index {index}");
    }
    names.Sort();
    foreach (var name in names)
    {
        Console.WriteLine($"Hello {name.ToUpper()}!");
    }
}
