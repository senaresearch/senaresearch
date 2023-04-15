from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from django.contrib.auth import get_user_model


Promoter = get_user_model()


class PromoterCreationForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = Promoter
        # fields = ("username", "email", "last_name", 'first_name',)
        fields = '__all__'
        

class PromoterChangeForm(UserChangeForm):

    class Meta:
        model = Promoter
        fields = ("username", "email", "image")