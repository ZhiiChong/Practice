namespace Classes;

public class BankAccount
{
    private static int accountNumberSeed = 1234567890;
    private readonly decimal _minimumBalance;
    private List<Transaction> allTransactions = new List<Transaction>();
    // 定义属性
    public string Number { get; }
    public string Owner { get; set; }
    public decimal Balance 
    { 
        get
        {
            decimal balance = 0;
            foreach (var item in allTransactions)
            {
                balance += item.Amount;
            }

            return balance;
        }
    }

    // 构造函数
    // public BankAccount(string name, decimal initialBalance)
    // {
    //     this.Owner = name;
    //     // this.Balance = initialBalance;
    //     this.Number = accountNumberSeed.ToString();
    //     accountNumberSeed++;
    //     // 修改为添加初始交易，非直接更新余额
    //     MakeDeposit(initialBalance, DateTime.Now, "Initial balance");
    // }
    public BankAccount(string name, decimal initialBalance) : this(name, initialBalance, 0) { }

    public BankAccount(string name, decimal initialBalance, decimal minimumBalance)
    {
        Number = accountNumberSeed.ToString();
        accountNumberSeed++;

        Owner = name;
        _minimumBalance = minimumBalance;

        if (initialBalance > 0)
            MakeDeposit(initialBalance, DateTime.Now, "Initial balance");
    }
    
    // 定义方法
    public void MakeDeposit(decimal amount, DateTime date, string note)
    {
        if (amount <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(amount), "Amount of deposit must be positive");
        }
        var deposit = new Transaction(amount, date, note);
        allTransactions.Add(deposit);
    }
    // public void MakeWithdrawal(decimal amount, DateTime date, string note)
    // {
    //     if (amount <= 0)
    //     {
    //         throw new ArgumentOutOfRangeException(nameof(amount), "Amount of deposit must be positive");
    //     }
    //     if (Balance - amount < _minimumBalance)
    //     {
    //         throw new InvalidOperationException("Not sufficient funds for this withdrawal");
    //     }
    //     var withdrawal = new Transaction(-amount, date, note);
    //     allTransactions.Add(withdrawal);
    // }
    // 重构取款方法
    public void MakeWithdrawal(decimal amount, DateTime date, string note)
    {
         if (amount <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(amount), "Amount of deposit must be positive");
        }
        Transaction? overdraftTransaction = CheckWithdrawalLimit(Balance - amount < _minimumBalance);
        Transaction? withdrawal = new(-amount, date, note);
        allTransactions.Add(withdrawal);
        if (overdraftTransaction != null)
        {
            allTransactions.Add(overdraftTransaction);
            // Console.WriteLine($"MinimumBalance is {_minimumBalance}");
        }
            
    }

    protected virtual Transaction? CheckWithdrawalLimit(bool isOverDrawn)
    {
        if (isOverDrawn)
        {
            throw new InvalidOperationException("Not sufficient funds for this withdrawal");
        }
        else
        {
            return default;
        }
    }

    public string GetAccountHistory()
    {
        var report = new System.Text.StringBuilder ();

        decimal balance = 0;
        report.AppendLine("Date\t\tAmount\tBalance\tNote");
        foreach (var item in allTransactions)
        {
            balance += item.Amount;
            report.AppendLine($"{item.Date.ToShortDateString()}\t{item.Amount}\t{balance}\t{item.Notes}");
        }

        return report.ToString();
    }

    public virtual void PerformMonthEndTransactions()
    {

    }
}

public class Transaction
{
    public decimal Amount { get; }
    public DateTime Date { get; }
    public string Notes { get; }

    public Transaction(decimal amount, DateTime date, string note)
    {
        Amount = amount;
        Date = date;
        Notes = note;
    }
}
