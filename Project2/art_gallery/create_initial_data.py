import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'art_gallery.settings')
django.setup()

from gallery.models import Category, Artwork

def create_initial_data():
    # Создаем категории
    painting = Category.objects.create(name="Живопись")
    ceramics = Category.objects.create(name="Керамика")
    sculpture = Category.objects.create(name="Скульптура")
    artists = Category.objects.create(name="Художники")
    
    # Создаем произведения искусства
    Artwork.objects.create(
        title="Современная живопись",
        category=painting,
        image="artworks/modern.jpg",
        price=15000,
        is_new=True
    )
    
    Artwork.objects.create(
        title="Идеи для подарка",
        category=ceramics,
        image="artworks/gift.jpg",
        price=8000,
        is_new=True
    )
    
    # Добавьте остальные произведения по аналогии
    
    print("Initial data created successfully!")

if __name__ == "__main__":
    create_initial_data()