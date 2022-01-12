import React from "react";
import {useForm} from "react-hook-form";

function FormValidate() {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset, //обновляет форму при отправке
    } = useForm({
        mode: "onBlur"
    })


    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset() //в функцию обновить
    }

    const styles = {
        input: {
            width: '300px',
            border: '1px solid',
            height: '30px',
            borderRadius: '5px',
        },
        submit: {
            background: '#EC5A90',
            color: '#fff',
            borderRadius: '5px',
            display: 'block',
            padding: '10px 25px',
            border: 'none'
        },
        label: {
            margin: '15px'
        },
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label style={styles.label}>
                    <div>Name:</div>
                    <input
                        {...register(
                            'firstName', {
                                required: "Поле обязательно к заполнения",
                                minLength: {
                                    value: 3,
                                    message: 'Меньше 3 символов'
                                }
                            }
                        )}
                        style={styles.input}
                        type="text"
                    />
                </label>
                <span className="errors">{errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}</span>
                <label style={styles.label}>
                    <div>Password:</div>
                    <input {...register('password', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 6,
                            message: "Меньше 6 символов"
                        },
                    })} style={styles.input} type="text"/>
                </label>
                <span className="errors">{errors?.password && <p>{errors?.password?.message || "Error"}</p>}</span>
                <label style={styles.label}>
                    <div>Email:</div>
                    <input {...register('email', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 6,
                            message: "Меньше 6 символов"
                        },
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Введите корректный email'
                        }
                    })} style={styles.input} type="email"/>
                    <span className="errors">{errors?.email && <p>{errors?.email.message}</p>}</span>
                </label>
                <button type="submit" disabled={!isValid} style={styles.submit}>Btn</button>
            </form>
        </div>
    )
}

export default FormValidate