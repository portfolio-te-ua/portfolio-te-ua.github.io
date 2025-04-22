import time
import subprocess
import tkinter as tk
from tkinter import messagebox

def shutdown_system():
    root.destroy()
    messagebox.showwarning("Shutdown", "Зараз ваш комп'ютер буде вимкнено через 10 секунд.")
    subprocess.call(["shutdown", "/s", "/t", "10"])
    time.sleep(5)
    subprocess.call(["shutdown", "/a"]) # Cancel the shutdown after 5 seconds
    messagebox.showinfo("Shutdown Cancelled", "Жартую! Гарного дня! :)")
    
root = tk.Tk()
root.geometry("1x1")


shutdown_system()