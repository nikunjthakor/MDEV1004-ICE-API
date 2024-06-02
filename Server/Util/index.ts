export function SanitizeArray(inputString: string): string[]
{
    let unsanitizedArray = inputString.split(",");
    // Created empty Array 
    let sanitizedArray = Array<string>();
    // trim each string
    for (const unsanitizedString of unsanitizedArray) 
    {
        sanitizedArray.push(unsanitizedString.trim());
    }
    return sanitizedArray;
}