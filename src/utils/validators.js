
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export const required = value => (value ? undefined : 'Field is Required')


export const maxLengthCreator = (ML) => {
    return (value) => {
        if (value&&value.length > ML) return ("Max length is " + ML + " symblos");
        return undefined
    }
}