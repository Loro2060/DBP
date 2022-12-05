using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace App3
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        void ButtonSubmitClicked(object sender, EventArgs e)
        {
            var input_name = nombre.Text;
            var input_edad = Edad.Text;
            var input_dir = Direccion.Text;
            Application.Current.MainPage.Navigation.PushModalAsync(new Page1(input_name), true);
        }

        void Button_ClickedOccupationPlus(object sender, EventArgs e)
        {
            var entry = new Entry() { Placeholder = "Ingresa tu ocupacion" };
            ocupation.Children.Add(entry);
        }
    }
}
