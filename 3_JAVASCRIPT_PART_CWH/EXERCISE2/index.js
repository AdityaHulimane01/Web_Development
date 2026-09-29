function Generator(x, y, z) {
    let num = Math.floor(Math.random()*3);
    if (num == 0)
        return x;
    else if (num == 1)
        return y;
    else
        return z;
}

console.log("The genrated Bussines name is" + " " + Generator("Crazy","Amazing","Fire")+" "+ Generator("Engine","Foods","Garments")+" "+ Generator("Bros","Limited","Hub"));