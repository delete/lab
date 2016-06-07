from urllib import request

from django import forms
from django.core.files.base import ContentFile
from django.utils.text import slugify

from .models import Image


class ImageCreateForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = ('title', 'url', 'description')
        widgets = {
            'url': forms.HiddenInput,
        }

    def clean_url(self):
        url = self.cleaned_data['url']
        valid_extensions = ['jpg', 'jpeg']
        extensions = url.rsplit('.', 1)[1].lower()

        if extensions not in valid_extensions:
            raise forms.ValidationError(
                'The given URL does not match valid image extensions.'
            )

        return self.cleaned_data['url']

    def save(self, force_insert=False, force_update=False, commit=True):
        image = super(ImageCreateForm, self).save(commit=False)
        image_url = self.cleaned_data['url']
        image_name = '{}.{}'.format(
            slugify(image.title), image_url.rsplit('.', 1)[1].lower()
        )

        # download image from the given url
        respose = request.urlopen(image_url)
        image.image.save(image_name, ContentFile(respose.read()), save=False)

        if commit:
            image.save()

        return image
