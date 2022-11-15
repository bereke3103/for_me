<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href={{asset('css/app.css')}}>
    <title>Document</title>

</head>
<body>

<div class="container">

    <form action="{{route('pages.registration.store')}}" method="POST">
        @csrf
        <div class="registration">

            <div class="name">
                <label>Имя пользователя</label>
                <input type="string" name="name" placeholder="Введите имя пользователя">
                @error('name')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>

            <div class="name">
                <label>Дата рождения</label>
                <input type="string" name="birthday" placeholder="Введите дату рождения">
                @error('birthday')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>

            <div class="name">
                <label>Количество полных лет</label>
                <input type="string" name="years" placeholder="Введите количество полных лет">
                @error('years')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>

            <div class="name">
                <label>Город местонахождение</label>
                <input type="string" name="city" placeholder="Введите город местонахождение">
                @error('city')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>


            <div class="name">
                <label>Образование</label>
                <input type="string" name="education" placeholder="Ваше образование">
                @error('education')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>

            <div class="name">
                <label>Специализация</label>
                <input type="string" name="stack" placeholder="Ваша специализация">
                @error('stack')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>

            <div class="name">
                <label>Профессиональные навыки</label>
                <input type="string" name="experience" placeholder="Ваши профессиональные навыки">
                @error('experience')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>

            <div class="name">
                <label>Контактные данные</label>
                <input type="string" name="contact" placeholder="Ваши контактные данные">
                @error('contact')
                <div class="text-danger">Это поле необходимо заполнить</div>
                @enderror
            </div>


{{--            <div class="email">--}}
{{--                <label>Email</label>--}}
{{--                <input type="email" name="email" placeholder="Введите вашу почту">--}}
{{--            </div>--}}
{{--            <div class="password">--}}
{{--                <label>Пароль</label>--}}
{{--                <input type="password" name="password" placeholder="Введите пароль">--}}
{{--            </div>--}}

        </div>

        <div class="submit">
            <input type="submit" value="Зарегистрировать">
        </div>
    </form>

</div>

</body>
</html>
