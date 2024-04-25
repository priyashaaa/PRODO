import time
import os

def pomodoro_timer():
    # Set durations (in seconds)
    work_duration = 60 * 60  # 25 minutes
    break_duration = 5 * 60  # 5 minutes

    # Loop indefinitely
    while True:
        # Work session
        print("Work session starts now.")
        countdown(work_duration)
        os.system('notify-send "Pomodoro Timer" "Time for a break!"')
        
        # Break session
        print("Break time!")
        countdown(break_duration)
        os.system('notify-send "Pomodoro Timer" "Time to get back to work!"')

def countdown(duration):
    while duration:
        mins, secs = divmod(duration, 60)
        timer = '{:02d}:{:02d}'.format(mins, secs)
        print(timer, end='\r')
        time.sleep(1)
        duration -= 1
    print("")

if __name__ == "__main__":
    pomodoro_timer()
