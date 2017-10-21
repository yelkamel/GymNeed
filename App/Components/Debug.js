function log(title, descr, isImportant)
{
    if (isImportant && __DEV__)
    {
        console.tron.log(`${title}: ${descr}`, true);
    }
    else
    if (__DEV__)
        {
            console.tron.log(`${title}: ${descr}`);
        }
}

function display(title, descr, value, isImportant)
{
    if (__DEV__)
    {
        console.tron.display({
            name     : title,
            value,
            preview  : descr,
            important: isImportant,
        });
    }
}

module.exports =    {
                        display,
                        log,
                    };