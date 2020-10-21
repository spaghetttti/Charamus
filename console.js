function consoleToJSON() {
    const c = {}

    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split('=')
         
        if (arg[1]) { 
            c[arg[0]] = arg[1] 
        }
        else { 
            c[arg[0]] = true
        }
        
    }

    return c
}

console.log(consoleToJSON())    