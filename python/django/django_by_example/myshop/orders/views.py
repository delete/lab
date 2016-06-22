from django.shortcuts import render, get_object_or_404
from django.contrib.admin.views.decorators import staff_member_required

from cart.cart import Cart

from .models import OrderItem, Order
from .forms import OrderCreateForm
from .tasks import order_created


# checks that both is_active and is_staff are True
@staff_member_required
def admin_order_detail(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    return render(request, 'admin/orders/order/detail.html', {'order': order})


def order_create(request):
    cart = Cart(request)

    if request.method == 'POST':
        form = OrderCreateForm(request.POST)
        if form.is_valid():
            order = form.save()
            for item in cart:
                OrderItem.objects.create(
                    order=order,
                    product=item['product'],
                    price=item['price'],
                    quantity=item['quantity']
                )
            # clear the cart
            cart.clear()
            # launch asynchronous task
            # order_created.delay(order.id)
            return render(
                request, 'orders/order/created.html', {'order': order}
            )
    else:
        form = OrderCreateForm()

    return render(
        request, 'orders/order/create.html', {'cart': cart, 'form': form}
    )
