}

class Child extends Parent
{
    constructor(name)
    {
        super();
        this.name = name;
    }

    getFullName()
    {
        return this.name +" "+ this.fatherName;
    }
}