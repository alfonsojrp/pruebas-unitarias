const isUpperCase = require('../utils/esmayuscula')

test (' lospalindromos molaan devuelve negativo ' , ()=>  {

expect(isUpperCase('lospalindromosmolan')).toBe(false);

}

)

test (' LOSPALINDROMOSMOLAN devuelve positivo' , ()=>  {

    expect(isUpperCase('LOSPALINDROMOSMOLAN')).toBe(true);
    
    }
    
    )
    
