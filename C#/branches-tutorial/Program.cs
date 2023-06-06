// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

HomeWork();
void HomeWork()
{
    int sum = 0;
    for (int i = 1; i < 21; i++)
    {
        if ((i % 3) == 0)
        {
            sum = sum + i;
            Console.WriteLine(i);
        }
    }
    Console.WriteLine($"The sum of numbers is {sum}");
}

void ExploreLoops()
{
    for (int row = 1; row < 11; row++)
    {
        for (char column = 'a'; column < 'k'; column++)
        {
            Console.WriteLine($"The cell is ({row}, {column})");
        }
    }
    // for (int index = 0; index < 10; index++)
    // {
    //     Console.WriteLine($"Hello World! The index is {index}");
    // }
    // int counter = 0;
    // while (counter < 10)
    // {
    //     Console.WriteLine($"Hello World! The counter is {counter}");
    //     counter++;
    // }

    // int counter2 = 0;
    // do
    // {
    //     Console.WriteLine($"Hello World! The counter2 is {counter2}");
    //     counter2++;
    // } while (counter2 < 10);

}

void ExploreIf()
{
    int a = 5;
    int b = 3;
    int c = 4;
    if ((a + b + c > 10) && (a == b))
    {
        Console.WriteLine("The answer is greater than 10.");
        Console.WriteLine("And the first numer is equal to the second.");

    }
    else 
    {
        Console.WriteLine("The answer is not greater than 10.");
        Console.WriteLine("Or the first number is not equal to the second");
    }

    if ((a + b + c > 10) || (a == b))
    {
        Console.WriteLine("The answer is greater than 10");
        Console.WriteLine("Or the first number is equal to the second");
    }
    else 
    {
        Console.WriteLine("The answer is not greater than 10");
        Console.WriteLine("And the first number is not equal to the second");
    }
}