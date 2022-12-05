using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace App3
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Page1 : ContentPage
    {
        private string mainContentProperty;

        public string MainContentProperty
        {
            get { return mainContentProperty; }
            set { 
                mainContentProperty = value;
                OnPropertyChanged(nameof(MainContentProperty));

            }
        }

        private string exp3;
        public string Exp3
        {
            get { return exp3; }
            set
            {
                exp3 = value;
                OnPropertyChanged(nameof(Exp3));

            }
        }

        public Page1(string mainContent)
        {
            InitializeComponent();
            BindingContext = this;
            MainContentProperty = mainContent;
        }
    }
}