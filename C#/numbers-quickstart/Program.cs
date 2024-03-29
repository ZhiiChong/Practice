﻿// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
// int a = 18;
// int b = 6;
// int c = a + b - 12 * 17;
// Console.WriteLine(c);
// WorkWithIntegers();
// OrderPrecedence();

// decimal min = decimal.MinValue;
// decimal max = decimal.MaxValue;
// Console.WriteLine($"The range of the decimal type is {min} to {max}");

// double a = 1.0;
// double b = 3.0;
// Console.WriteLine(a / b);

// decimal c = 1.0M;
// decimal d = 3.0M;
// Console.WriteLine(c / d);

double pi = Math.PI;
double r = 2.5;
Console.WriteLine($"The area of the circle is {r * r *pi}");


void WorkwithDoubles()
{
    double a = 5;
    double b = 4;
    double c = 2;
    double d = (a + b) / c;
    Console.WriteLine(d);

    double e = 1;
    double f = 23;
    double g = 7;
    double h = (e + f) / g;
    Console.WriteLine(h);

    double max = double.MaxValue;
    double min = double.MinValue;
    Console.WriteLine($"The range of double is {min} to {max}");

    double third = 1.0 / 3.0;
    Console.WriteLine(third);

}

void TestLimits()
{
    // int a = 7;
    // int b = 4;
    // int c = 3;
    // int d = (a + b) / c;
    // int e = (a + b) % c;
    // Console.WriteLine(d);
    // Console.WriteLine(e);
    int max = int.MaxValue;
    int min = int.MinValue;
    Console.WriteLine($"The range of integers is {min} to {max}");


    int what = max + 3;
    Console.WriteLine($"An example of overflow: {what}");
}


void OrderPrecedence() 
{
    int a = 5;
    int b = 4;
    int c = 2;
    int d = a + b * c;
    Console.WriteLine(d);

    d = (a + b) * c;
    Console.WriteLine(d);

    d = (a + b) * c;
    Console.WriteLine(d);

    d = (a + b) - 6 * c + (12 * 4) / 3 + 12;
    Console.WriteLine(d);

    int e = 7;
    int f = 4;
    int g = 3;
    int h = (e + f) / g;
    Console.WriteLine(h);
}

void WorkWithIntegers()
{
    int a = 18;
    int b = 6;
    int c = a + b;
    Console.WriteLine(c);

    c = a - b;
    Console.WriteLine(c);

    c = a * b;
    Console.WriteLine(c);

    c = a / b;
    Console.WriteLine(c);


}