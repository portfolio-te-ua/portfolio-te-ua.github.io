from tkinter import *

clicks = 0

root = Tk()
root.geometry("300x200")
root.configure(bg="black")

def addClick():
    global clicks
    clicks += 1
    btn.config(text=clicks)

lbl = Label(root, 
            text="Клікер",
            font=("Arial", 20),
            fg="white",
            bg="black"
            )
btn = Button(root, 
             text=clicks,
             font=("sans", 30),
             bg="#5d81ba",
             activebackground="lightblue",
             command=addClick
               )

lbl.pack(pady=10)
btn.pack(pady=20)

root.mainloop()
